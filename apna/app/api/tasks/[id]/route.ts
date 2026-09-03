import { z } from 'zod';
import { ok, fail } from '@/lib/api-response';

const idSchema = z.object({
  id: z.string().trim().min(1, 'ID is required'),
});

export async function GET(
  req: Request,
  context?: { params?: Promise<{ id?: string }> | { id?: string } }
) {
  try {
    const url = new URL(req.url);
    const queryId = url.searchParams.get('id');

    const paramsValue = context?.params
      ? await Promise.resolve(context.params)
      : undefined;

    const id = paramsValue?.id ?? queryId ?? '';
    const parsed = idSchema.safeParse({ id });

    if (!parsed.success) {
      return fail('VALIDATION_ERROR', 'Invalid or missing ID parameter', 400);
    }

    const { id: taskId } = parsed.data;
    const mockDatabaseTasks: Record<string, { id: string; title: string; priority: string }> = {
      '1': { id: '1', title: 'Fix Navigation Bar', priority: 'high' },
      '2': { id: '2', title: 'Implement Zod Validation', priority: 'medium' },
    };

    const task = mockDatabaseTasks[taskId];

    if (!task) {
      return fail('NOT_FOUND', `Task with ID '${taskId}' not found`, 404);
    }

    return ok(task, 200);
  } catch (error) {
    console.error('Error fetching task by ID:', error);
    return fail('INTERNAL_SERVER_ERROR', 'Something went wrong', 500);
  }
}
