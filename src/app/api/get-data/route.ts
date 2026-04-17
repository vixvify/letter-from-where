import { prisma } from "@/lib/prisma";
import { success, fail } from "@/lib/response";

export async function GET() {
  try {
    const data = await prisma.data.findMany({});
    return success(data, 200);
  } catch (err) {
    console.error(err);
    return fail("Failed to fetch data", 500, "FETCH_FAILED");
  }
}
