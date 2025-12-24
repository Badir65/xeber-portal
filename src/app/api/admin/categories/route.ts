import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateSlug } from "@/lib/utils";

// GET all categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: { _count: { select: { news: true } } },
      orderBy: { name: "asc" },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("GET categories error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}

// POST create category
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, color } = body;

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Kateqoriya adı mütləqdir" }, { status: 400 });
    }

    // Check if category exists
    const existing = await prisma.category.findFirst({
      where: { name: { equals: name.trim(), mode: "insensitive" } },
    });

    if (existing) {
      return NextResponse.json({ error: "Bu kateqoriya artıq mövcuddur" }, { status: 400 });
    }

    const slug = generateSlug(name);

    const category = await prisma.category.create({
      data: {
        name: name.trim(),
        slug,
        color: color || "#0ea5e9",
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("POST category error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}
