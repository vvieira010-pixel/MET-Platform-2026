export const MET_READING_GRAMMAR_CRITERIA = {
  test_id: 'MET_mock_reading_grammar_v1',
  total_items: 50,
  difficulty_breakdown: {
    level_1: 24,
    level_2: 14,
    level_3: 8,
    level_4: 4,
  },
  scoring: {
    raw_score: 'correct_count',
    scaled_score: 'round(raw_correct / total_items * 80, 1)',
    max_scaled: 80,
    min_scaled: 0,
  },
  met_bands: [
    { band: 'A2',         label: 'A2',         range: [0, 29] },
    { band: 'B1',         label: 'B1',         range: [30, 39] },
    { band: 'B1_strong',  label: 'B1+',        range: [40, 49] },
    { band: 'B2',         label: 'B2',         range: [50, 59] },
    { band: 'B2_strong',  label: 'B2+',        range: [60, 69] },
    { band: 'C1',         label: 'C1',         range: [70, 80] },
  ],
  cefr_mapping: {
    A2: 'A2',
    B1: 'B1',
    B1_strong: 'B1+',
    B2: 'B2',
    B2_strong: 'B2+',
    C1: 'C1',
  },
};

export function getMetScaledScore(rawCorrect, totalItems) {
  if (!totalItems || totalItems <= 0) return 0;
  const scaled = (rawCorrect / totalItems) * 80;
  return Math.round(scaled * 10) / 10;
}

export function getMetBand(scaledScore) {
  const { met_bands } = MET_READING_GRAMMAR_CRITERIA;
  for (const b of met_bands) {
    if (scaledScore >= b.range[0] && scaledScore <= b.range[1]) {
      return b;
    }
  }
  return met_bands[0];
}
