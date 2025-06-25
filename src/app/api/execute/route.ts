import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { taskIds } = body;

  // Mock: Log the received task IDs (in real app, would trigger execution)
  console.log("Executing tasks:", taskIds);

  return NextResponse.json({ success: true, executed: taskIds }, { status: 200 });
} 