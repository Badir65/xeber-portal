import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all events
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: "asc" },
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error("GET events error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}

// POST create event
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, date, type, icon, isHoliday, recurring } = body;

    if (!title || !date) {
      return NextResponse.json({ error: "Başlıq və tarix mütləqdir" }, { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        title: title.trim(),
        date: new Date(date),
        type: type || "Tədbir",
        icon: icon || "📅",
        isHoliday: isHoliday || false,
        recurring: recurring || false,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("POST event error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}
