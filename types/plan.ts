import { z } from "zod";

export const PlanTask = z.object({
  id: z.string(),
  label: z.string(),
  suggested: z.boolean(),
});

export const Plan = z.object({
  id: z.string(),
  tasks: PlanTask.array(),
});

export type PlanTaskType = z.infer<typeof PlanTask>;
export type PlanType = z.infer<typeof Plan>; 