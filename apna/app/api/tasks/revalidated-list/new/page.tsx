import { addRevalidatedTask } from '@/app/actions/revalidate-actions';

async function submitTask(formData: FormData): Promise<void> {
  'use server';

  await addRevalidatedTask(formData);
}

export default function NewRevalidatedTaskPage() {
  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Create Task & Trigger Revalidation</h2>

      <form action={submitTask} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Task Title:</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter task name..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Priority:</label>
          <select name="priority" style={{ width: '100%', padding: '8px' }}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          type="submit"
          style={{ padding: '10px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
        >
          Save & Revalidate
        </button>
      </form>
    </div>
  );
}