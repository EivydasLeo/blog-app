import { defineType, defineField } from "sanity";

export default defineType({
    name: "localeBlockContent",
    title: "Localized Block Content",
    type: "object",
    fields: [
        defineField({
            name: "en",
            title: "English",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: "lt",
            title: "Lithuanian",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ],
        }),
    ],
});
