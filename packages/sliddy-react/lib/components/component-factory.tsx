import {
    SlideCodeElement,
    SlideElement,
    SlideTextElement,
} from "@ulthar/sliddy-core";
import { TextElement } from "./text-element.js";
import { HeadingElement } from "./heading-element.js";
import { UnorderedListElement } from "./unordered-list.js";
import { BlockElement } from "./block.js";
import { CodeElement } from "./code.js";

const componentFactories: Record<string, (e: any) => JSX.Element> = {
    text: (element: SlideTextElement) => <TextElement element={element} />,
    heading: (element: SlideTextElement) => (
        <HeadingElement element={element} />
    ),
    "unordered-list": (element: any) => (
        <UnorderedListElement element={element} />
    ),
    block: (element: SlideElement) => <BlockElement element={element} />,
    code: (element: SlideCodeElement) => <CodeElement element={element} />,
};

export function createComponentFromElement(element: SlideElement) {
    return componentFactories[element.type](element);
}