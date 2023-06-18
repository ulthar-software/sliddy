import { Slide } from "./slide.js";
import { SlideElementStyles } from "./styles.js";
import { PropertyValue } from "./property-value.js";
import { DeckTheme } from "./deck-theme.js";

export interface Deck {
    name: string;
    properties?: Record<string, PropertyValue>;
    theme: DeckTheme;
    styles?: SlideElementStyles;
    slides: Array<Slide>;
}
