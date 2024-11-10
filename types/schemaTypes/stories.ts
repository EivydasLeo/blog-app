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
      name: "storie",
      title: "Storie",
      type: "localeBlockContent",
    }),
  ],
});
