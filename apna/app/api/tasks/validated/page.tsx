'use client';

import { useActionState } from 'react';
import { validateAndCreateTask, FormState } from '@/app/actions/validated-actions';

const initialState: FormState = {
  success: false,
  message: '',
  errors: {},
  fields: { title: '', priority: 'medium' },
};

export default function ValidatedTaskPage() {
  const [state, formAction, isPending] = useActionState(validateAndCreateTask, initialState);

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Create Task with Zod Validation</h2>

      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Task Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={state.fields?.title || ''}
            placeholder="Enter task title..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {state.errors?.title && (
            <p style={{ color: 'red', fontSize: '13px', marginTop: '4px' }}>
              {state.errors.title[0]}
            </p>
          )}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Priority:</label>
          <select
            name="priority"
            defaultValue={state.fields?.priority || 'medium'}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {state.errors?.priority && (
            <p style={{ color: 'red', fontSize: '13px', marginTop: '4px' }}>
              {state.errors.priority[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{ padding: '10px', background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          {isPending ? 'Submitting...' : 'Create Task'}
        </button>
      </form>

      {state?.message && (
        <p
          style={{
            marginTop: '20px',
            color: state.success ? 'green' : 'red',
            fontWeight: 'bold',
          }}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}