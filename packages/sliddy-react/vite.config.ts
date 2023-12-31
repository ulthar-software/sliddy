import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { prismjsPlugin } from "vite-plugin-prismjs";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        prismjsPlugin({
            plugins: ["line-numbers"],
            languages: ["javascript", "http", "css", "jsx"],
            css: true,
        }),
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "lib/main.js"),
            name: "sliddy-react",
            // the proper extensions will be added
            fileName: "sliddy-react",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: "React",
                },
            },
        },
    },
});
