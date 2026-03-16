import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.data.findMany({});
    return NextResponse.json({ data, status: 200 }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err, status: 400 }, { status: 400 });
  }
}
