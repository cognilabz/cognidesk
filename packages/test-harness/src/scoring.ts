import type { CriterionJudgement, EvaluationCriterion } from "./types.js";

export function weightedScore(criteria: EvaluationCriterion[], judgements: CriterionJudgement[]) {
  if (judgements.length === 0) return 1;
  const criterionById = new Map(criteria.map((criterion) => [criterion.id, criterion]));
  let weighted = 0;
  let totalWeight = 0;
  for (const judgement of judgements) {
    const weight = criterionById.get(judgement.criterionId)?.weight ?? 1;
    weighted += judgement.score * weight;
    totalWeight += weight;
  }
  return totalWeight === 0 ? 0 : weighted / totalWeight;
}
