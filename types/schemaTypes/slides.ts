import { defineField, defineType } from "sanity";

export default defineType({
    type: "document",
    name: "slides",
    title: "Slides",
    fields: [
        defineField({
            name: "slides",
            type: "array",
            title: "Slides",
            of: [
                defineField({
                    type: "reference",
                    to: [{ type: "photo" }],
                    name: "slideReference",
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "slides.0.title",
            media: "slides.0.image",
        },
    },
});
