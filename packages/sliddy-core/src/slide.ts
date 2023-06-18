import { SlideElementStyles } from "./styles.js";
import { SlideElement } from "./elements/slide-element.js";
import { PropertyValue } from "./property-value.js";
import { LayoutTypes } from "./layout.js";

export interface Slide {
    layout: LayoutTypes;
    properties?: Record<string, any>;
    styles?: SlideElementStyles;
    notes?: string;
    content?: SlideElement[] | SlideElement[][];
}
