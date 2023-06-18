// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            accent: string;
            background: string;
        };
        fonts: {
            primary: string;
            headings: string;
        };
        text: {
            size: string;
        };
    }
}
