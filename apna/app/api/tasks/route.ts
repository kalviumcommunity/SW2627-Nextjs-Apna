// app/api/tasks/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Task 1: Define a Zod Schema and infer its TypeScript type
const createTaskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  priority: z.enum(['low', 'medium', 'high']),
});

type CreateTaskInput = z.infer<typeof createTaskSchema>;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Task 2: Validate Before Business Logic using safeParse
    const parsed = createTaskSchema.safeParse(body);

    // Return 400 immediately before any database interaction if invalid
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Task 3: Use Validated Data Only
    // We strictly use parsed.data instead of the raw body
    const validData: CreateTaskInput = parsed.data;

    // Simulate database creation using only the validated fields
    const newTask = {
      id: 'task_123',
      title: validData.title,
      priority: validData.priority,
    };

    return NextResponse.json(
      { success: true, data: newTask },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Malformed JSON payload" },
      { status: 400 }
    );
  }
}