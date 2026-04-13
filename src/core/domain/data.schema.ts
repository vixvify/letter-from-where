import { z } from "zod";
import { ICreateData } from "./data";

export const createDataSchema: z.ZodType<ICreateData> = z.object({
  name: z.string().min(1),
  age: z.number().int().positive(),
  scene_18: z.string().min(1),
  scene_30: z.string().min(1),
  scene_41: z.string().min(1),
  scene_46: z.string().min(1),
});
