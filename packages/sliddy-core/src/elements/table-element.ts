import { SlideElement } from "./slide-element.js";

export interface SlideTableElement extends SlideElement {
    type: "table";
    content: string[][];
}
