import type { CriterionJudgement, EvaluationCriterion } from "./types.js";

export function weightedScore(criteria: EvaluationCriterion[], judgements: CriterionJudgement[]) {
  if (judgements.length === 0) return 1;
  const criterionById = new Map(criteria.map((criterion) => [criterion.id, criterion]));
  const judgedCriterionIds = new Set(judgements.map((judgement) => judgement.criterionId));
  if (criteria.some((criterion) => !judgedCriterionIds.has(criterion.id))) return 0;
  let weighted = 0;
  let totalWeight = 0;
  for (const judgement of judgements) {
    if (!Number.isFinite(judgement.score) || judgement.score < 0 || judgement.score > 1) {
      throw new Error(`Judgement '${judgement.criterionId}' score must be between 0 and 1.`);
    }
    const weight = criterionById.get(judgement.criterionId)?.weight ?? 1;
    if (!Number.isFinite(weight) || weight < 0) {
      throw new Error(`Criterion '${judgement.criterionId}' weight must be a non-negative number.`);
    }
    weighted += judgement.score * weight;
    totalWeight += weight;
  }
  return totalWeight === 0 ? 0 : weighted / totalWeight;
}
