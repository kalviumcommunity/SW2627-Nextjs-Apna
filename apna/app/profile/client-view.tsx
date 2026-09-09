'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function ClientSessionView() {
  const { data: session, status } = useSession();

  return (
    <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '6px' }}>
      <h3>Client Component Session:</h3>
      <p>Status: <strong>{status}</strong></p>
      <pre style={{ fontSize: '12px', overflowX: 'auto' }}>
        {session ? JSON.stringify(session, null, 2) : 'Not signed in (Client)'}
      </pre>

      <div style={{ marginTop: '15px' }}>
        {!session ? (
          <button
            onClick={() => signIn('google')}
            style={{ padding: '8px 16px', background: '#4285F4', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Sign in with Google
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            style={{ padding: '8px 16px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}