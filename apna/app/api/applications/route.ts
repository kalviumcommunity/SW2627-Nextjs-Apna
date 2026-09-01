// app/api/applications/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/applications
 * Retrieves all submitted job applications ordered chronologically.
 */
export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        count: applications.length,
        data: applications,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/applications error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch applications from the database.",
        },
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/applications
 * Validates payload and creates a new candidate application record.
 */
export async function POST(req: Request) {
  try {
    // 1. Parse JSON body from the incoming request
    const body = await req.json();
    const { candidateName, jobTitle } = body;

    // 2. Defensive Validation: reject incomplete inputs with 400 Bad Request
    if (!candidateName || typeof candidateName !== "string" || candidateName.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "BAD_REQUEST",
            message: "Field 'candidateName' is required and must be a valid string.",
          },
        },
        { status: 400 }
      );
    }

    if (!jobTitle || typeof jobTitle !== "string" || jobTitle.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "BAD_REQUEST",
            message: "Field 'jobTitle' is required and must be a valid string.",
          },
        },
        { status: 400 }
      );
    }

    // 3. Persist record to PostgreSQL via Prisma
    const newApplication = await prisma.application.create({
      data: {
        candidateName: candidateName.trim(),
        jobTitle: jobTitle.trim(),
        status: "PENDING",
      },
    });

    // 4. Return 201 Created with the created entity
    return NextResponse.json(
      {
        success: true,
        data: newApplication,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/applications error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected database error occurred during creation.",
        },
      },
      { status: 500 }
    );
  }
}
