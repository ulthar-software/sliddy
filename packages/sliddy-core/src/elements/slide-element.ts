import { PropertyValue } from "../property-value.js";
import { SlideElementStyles } from "../styles.js";

export const SlideElementTypeNames = [
    "text",
    "image",
    "video",
    "block",
    "unordered-list",
    "ordered-list",
    "list-item",
    "vertical-separator",
    "horizontal-separator",
    "code",
    "iframe",
    "heading",
] as const;
export type SlideElementType = (typeof SlideElementTypeNames)[number];

export interface SlideElement {
    type: SlideElementType;
    styles?: SlideElementStyles;
    properties?: Record<string, PropertyValue>;
    content?: string | string[] | SlideElement[] | SlideElement[][];
}
