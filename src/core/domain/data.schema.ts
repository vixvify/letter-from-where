import { z } from "zod";
import { ICreateData } from "./data";

export const createDataSchema: z.ZodType<ICreateData> = z.object({
  name: z.string().min(1),
  age: z.number().int().positive(),
  scene_1: z.string().min(1),
});
