import { defineField, defineType } from "sanity";

export default defineType({
    type: "document",
    name: "photo",
    title: "Photo",
    fields: [
        defineField({
            type: "string",
            name: "title",
            title: "Title",
        }),
        defineField({
            type: "string",
            name: "alt",
            title: "Alt",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
        }),
    ],
});
