import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { prisma } from "@/lib/prisma";
import { success, fail } from "@/lib/response";
import { createDataSchema } from "@/core/domain/data.schema";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = createDataSchema.parse(body);

    const created = await prisma.data.create({ data });

    return success(created, 201);
  } catch (err: unknown) {
    console.error(err);

    if (err instanceof ZodError) {
      const message = err.issues
        .map((e) => `${e.path.join(".")}: ${e.message}`)
        .join(", ");

      return fail(message, 422, "VALIDATION_ERROR");
    }

    if (err instanceof Error) {
      return fail(err.message, 400, "ERROR");
    }

    return fail("Unknown error", 400, "UNKNOWN_ERROR");
  }
}
