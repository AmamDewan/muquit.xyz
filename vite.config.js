import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";

export default defineConfig({
    server: {
        open: "/index.html",
    },
    build: {
        outDir: "../public",
    },
    root: "src",
    plugins: [vitePugPlugin()]
});
