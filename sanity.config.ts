import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./types/schemaTypes";
import { languageFilter } from "@sanity/language-filter";
import { languages } from "./types/locales/languages";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
    name: "default",
    title: "blog-app",
    basePath: "/studio",
    projectId,
    dataset,

    plugins: [
        structureTool(),
        visionTool(),
        languageFilter({
            supportedLanguages: languages,
            defaultLanguages: ["en"],
            documentTypes: ["author"],
        }),
    ],

    schema: {
        types: schemaTypes,
    },
});
