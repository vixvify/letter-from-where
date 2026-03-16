import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await prisma.data.create({ data });
    return NextResponse.json({ data, status: 201 }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err, status: 400 }, { status: 400 });
  }
}
