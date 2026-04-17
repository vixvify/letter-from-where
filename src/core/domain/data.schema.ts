import { z } from "zod";
import { ICreateData } from "./data";

export const createDataSchema: z.ZodType<ICreateData> = z.object({
  name: z.string().min(1),
  age: z.number().int().positive(),
  scene_18: z.string().min(1),
  scene_29: z.string().min(1),
  scene_30: z.string().min(1).optional(),
  scene_40: z.string().min(1),
  scene_41: z.string().min(1).optional(),
  scene_46: z.string().min(1),
  scene_52: z.string().min(1),
  scene_69: z.string().min(1),
  scene_70: z.string().min(1).optional(),
  scene_94: z.string().min(1),
});
