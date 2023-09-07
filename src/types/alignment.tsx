export const HORIZONTAL_ALIGNMENTS = ["center", "left", "right"] as const;
export type HorizontalAlignment = typeof HORIZONTAL_ALIGNMENTS[number];

export const VERTICAL_ALIGNMENTS = ["center", "top", "bottom"] as const;
export type VerticalAlignment = typeof VERTICAL_ALIGNMENTS[number];
