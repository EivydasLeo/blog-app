import { defineField, defineType } from "sanity";

export default defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "localeString",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "localeBlockContent",
        }),
        defineField({
            name: "writing",
            title: "Writing",
            type: "localeBlockContent",
        }),
        defineField({
            name: "books",
            title: "Books Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Website title",
                            type: "string",
                        },
                        {
                            name: "link",
                            title: "Website address",
                            type: "url",
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: "articles",
            title: "Articles Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Website title",
                            type: "string",
                        },
                        {
                            name: "link",
                            title: "Website address",
                            type: "url",
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
});
