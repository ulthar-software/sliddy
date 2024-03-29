import { Slide } from "@ulthar/sliddy-core";
import { DefaultLayout } from "./default-layout.js";
import { WelcomeSlide } from "./welcome-slide.js";
import { createComponentsFromElementArray } from "../components/component-factory.js";
import { Objectives } from "./objectives.js";
import { Presenter } from "./presenter.js";
import { TitleLayout } from "./title.js";
import { Blackboard } from "./blackboard.js";
import { BreakLayout } from "./break-layout.js";
import { TwoColumnsLayout } from "./two-columns.js";
import { MediaIFrame } from "../utils/media-iframe.js";
import { Heading } from "../utils/heading.js";
import { parseStringMarkdown } from "../utils/parse-markdown.js";

const layoutFactories: Record<string, (s: Slide) => JSX.Element> = {
    default: (slide: Slide) => (
        <DefaultLayout style={slide.styles} {...(slide.properties as any)}>
            {createComponentsFromElementArray(slide.content)}
        </DefaultLayout>
    ),
    welcome: (slide: Slide) => <WelcomeSlide {...(slide.properties as any)} />,
    objectives: (slide: Slide) => <Objectives {...(slide.properties as any)} />,
    presenter: (slide: Slide) => <Presenter {...(slide.properties as any)} />,
    title: (slide: Slide) => (
        <TitleLayout style={slide.styles} {...(slide.properties as any)} />
    ),
    blackboard: (slide: Slide) => <Blackboard {...(slide.properties as any)} />,
    break: (slide: Slide) => <BreakLayout {...(slide.properties as any)} />,
    "two-columns": (slide: Slide) => <TwoColumnsLayout slide={slide} />,
    embed: (slide: Slide) => (
        <DefaultLayout style={slide.styles} {...(slide.properties as any)}>
            <Heading>{parseStringMarkdown(slide.properties?.title)}</Heading>
            <MediaIFrame src={slide.properties?.url} />
        </DefaultLayout>
    ),
};

export function createLayoutForSlide(slide: Slide) {
    if (slide.layout in layoutFactories) {
        return layoutFactories[slide.layout](slide);
    } else {
        return layoutFactories["default"](slide);
    }
}
