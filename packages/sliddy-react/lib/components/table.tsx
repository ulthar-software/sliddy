import { SlideTableElement } from "@ulthar/sliddy-core";
import { createComponentFromElement } from "./component-factory.tsx";

export interface TableProps {
    element: SlideTableElement;
}

export function TableElement({ element }: TableProps) {
    return (
        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid white",
                ...(element.styles as any),
            }}
        >
            <thead style={{}}>
                <tr>
                    {element.content[0].map((c, i) => (
                        <th
                            key={i}
                            style={{
                                border: "1px solid white",
                                padding: "0.5em",
                            }}
                        >
                            {createComponentFromElement(c)}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody style={{}}>
                {element.content.slice(1).map((row, i) => (
                    <tr key={i} style={{}}>
                        {row.map((c, j) => (
                            <td
                                key={j}
                                style={{
                                    border: "1px solid white",
                                    padding: "0.5em",
                                    width: `${100 / row.length}%`,
                                    textAlign: "left",
                                }}
                            >
                                {createComponentFromElement(c)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
