import { PLANS } from "./plans";

export function canCreateChecklist(plan: keyof typeof PLANS, count: number) {
  return count < PLANS[plan].maxChecklists;
}
