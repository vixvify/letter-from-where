import { z } from "zod";
import { ICreateData } from "./data";

export const createDataSchema: z.ZodType<ICreateData> = z.object({
  scene_1: z.string().min(1),
});
