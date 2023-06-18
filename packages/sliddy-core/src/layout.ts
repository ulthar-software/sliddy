export const LayoutTypes = [
    "default",
    "title",
    "two-columns",
    "blackboard",
    "break",
    "welcome",
    "presenter",
    "objectives",
    "quiz",
] as const;

export type LayoutTypes = (typeof LayoutTypes)[number];
