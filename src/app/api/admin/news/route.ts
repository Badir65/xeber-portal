import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateSlug } from "@/lib/utils";

// GET all news
export async function GET() {
  try {
    const news = await prisma.news.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(news);
  } catch (error) {
    console.error("GET news error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}

// POST create news
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, subtitle, description, content, image, images, categoryId, published, featured, readTime } = body;

    if (!title || !description || !categoryId) {
      return NextResponse.json(
        { error: "Başlıq, açıqlama və kateqoriya mütləqdir" },
        { status: 400 }
      );
    }

    // Generate unique slug
    let slug = generateSlug(title);
    const existingSlug = await prisma.news.findUnique({ where: { slug } });
    if (existingSlug) {
      slug = `${slug}-${Date.now()}`;
    }

    const news = await prisma.news.create({
      data: {
        title,
        subtitle: subtitle || null,
        slug,
        description,
        content: content || null,
        image: image || null,
        images: images || [],
        categoryId,
        published: published || false,
        featured: featured || false,
        readTime: readTime || "3 dəq",
        publishedAt: published ? new Date() : null,
      },
    });

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error("POST news error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}