import { DivColumn } from "../utils/div-column.js";
import { Heading } from "../utils/heading.js";
import { parseStringMarkdown } from "../utils/parse-markdown.js";

interface PresenterProps {
    name: string;
    avatar: string;
    content: string[];
}

export function Presenter({ name, avatar, content }: PresenterProps) {
    return (
        <DivColumn
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    overflow: "hidden",
                }}
            >
                <img
                    src={avatar}
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </div>

            <Heading>{parseStringMarkdown(name)}</Heading>
            {content.map((value) => {
                return (
                    <p style={{ fontSize: "0.8em" }}>
                        {parseStringMarkdown(value)}
                    </p>
                );
            })}
        </DivColumn>
    );
}
