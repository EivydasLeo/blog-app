import { defineField, defineType } from "sanity";

export default defineType({
    name: "stories",
    title: "Stories",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "localeString",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title.en",
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "storie",
            title: "Storie",
            type: "localeBlockContent",
        }),
    ],
});
