import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateSlug } from "@/lib/utils";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET single news
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const news = await prisma.news.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!news) {
      return NextResponse.json({ error: "Xəbər tapılmadı" }, { status: 404 });
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error("GET news error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}

// PUT update news
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { title, subtitle, description, content, image, images, categoryId, published, featured, readTime } = body;

    if (!title || !description || !categoryId) {
      return NextResponse.json(
        { error: "Başlıq, açıqlama və kateqoriya mütləqdir" },
        { status: 400 }
      );
    }

    const existingNews = await prisma.news.findUnique({ where: { id } });
    if (!existingNews) {
      return NextResponse.json({ error: "Xəbər tapılmadı" }, { status: 404 });
    }

    // Generate new slug if title changed
    let slug = existingNews.slug;
    if (title !== existingNews.title) {
      slug = generateSlug(title);
      const slugExists = await prisma.news.findFirst({
        where: { slug, id: { not: id } },
      });
      if (slugExists) {
        slug = `${slug}-${Date.now()}`;
      }
    }

    const news = await prisma.news.update({
      where: { id },
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
        publishedAt: published && !existingNews.publishedAt ? new Date() : existingNews.publishedAt,
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    console.error("PUT news error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}

// DELETE news
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    
    const existingNews = await prisma.news.findUnique({ where: { id } });
    if (!existingNews) {
      return NextResponse.json({ error: "Xəbər tapılmadı" }, { status: 404 });
    }

    await prisma.news.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE news error:", error);
    return NextResponse.json({ error: "Xəta baş verdi" }, { status: 500 });
  }
}