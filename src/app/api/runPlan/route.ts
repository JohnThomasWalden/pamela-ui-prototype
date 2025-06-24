import { NextResponse } from "next/server";

export async function GET() {
  // Simulate latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  const data = {
    id: "plan_demo",
    tasks: [
      { id: "t1", label: "Draft welcome email", suggested: true },
      { id: "t2", label: "Create Trello card", suggested: true },
      { id: "t3", label: "Book Calendly call", suggested: false },
    ],
  };

  return NextResponse.json(data, { status: 200 });
}

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const data = {
    id: "plan_demo",
    tasks: [
      { id: "t1", label: "Draft welcome email", suggested: true },
      { id: "t2", label: "Create Trello card", suggested: true },
      { id: "t3", label: "Book Calendly call", suggested: false },
    ],
  };

  return NextResponse.json(data, { status: 200 });
} 