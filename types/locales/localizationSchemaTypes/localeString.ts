import { defineField, defineType } from "sanity";

export default defineType({
    name: "localeString",
    title: "Localized String",
    type: "object",
    fields: [
        defineField({
            name: "en",
            title: "English",
            type: "string",
        }),
        defineField({
            name: "lt",
            title: "Lithuanian",
            type: "string",
        }),
    ],
});
