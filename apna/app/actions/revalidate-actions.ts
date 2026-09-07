'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

type MockTask = {
  id: string;
  title: string;
  priority: string;
};

declare global {
  var mockTaskList: MockTask[];
}

// In-memory mock database array for demonstration
globalThis.mockTaskList = globalThis.mockTaskList || [
  { id: '1', title: 'Fix Navigation Bar', priority: 'high' },
  { id: '2', title: 'Implement Zod Validation', priority: 'medium' },
];

export async function addRevalidatedTask(formData: FormData) {
  const title = formData.get('title')?.toString();
  const priority = formData.get('priority')?.toString() || 'medium';

  if (!title || title.trim() === '') {
    return { success: false, message: 'Title is required' };
  }

  // 1. Mutate data (Simulated database insert)
  const newTask = {
    id: Date.now().toString(),
    title: title.trim(),
    priority,
  };
  globalThis.mockTaskList.push(newTask);

  // 2. Revalidate cache using Path and Tag
  revalidatePath('/tasks/revalidated-list');
  revalidateTag('tasks-cache-tag', 'max');

  // 3. Redirect to the updated list view after revalidation
  redirect('/tasks/revalidated-list');
}

export function getMockTasks() {
  return globalThis.mockTaskList;
}
