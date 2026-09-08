'use client';

import { useActionState } from 'react';
import { signUpUser } from '@/app/actions/auth-actions';
import Link from 'next/link';

const initialState = { success: false, message: '' };

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(signUpUser, initialState);

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>Sign Up (Bcrypt Hashing)</h2>

      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
          <input
            type="email"
            name="email"
            required
            placeholder="user@example.com"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter secure password..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{ padding: '10px', background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
        >
          {isPending ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      {state?.message && (
        <p style={{ marginTop: '20px', color: state.success ? 'green' : 'red', fontWeight: 'bold' }}>
          {state.message}
        </p>
      )}

      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        Already have an account? <Link href="/api/auth/signin">Sign In here</Link>
      </p>
    </div>
  );
}