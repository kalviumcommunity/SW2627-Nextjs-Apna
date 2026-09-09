import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // Task 1: Configure NextAuth with JWT session strategy
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // Task 2: JWT secret is set via an env var, not hardcoded
  secret: process.env.NEXTAUTH_SECRET,
  // Task 3: Secure cookie configuration (httpOnly, secure in production, sameSite=lax)
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        // Mock user for demonstration of JWT session payload mapping
        return {
          id: 'user_123',
          name: 'Tamanna Developer',
          email: String(credentials.email),
          role: 'admin', // Custom field added to JWT
        };
      },
    }),
  ],
  callbacks: {
    // Task 5: Document fields added to the JWT
    // We add user ID and role to minimize database lookups on every request
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };