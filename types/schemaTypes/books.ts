import { defineField, defineType } from "sanity";

export default defineType({
  name: "books",
  title: "Books",
  type: "document",
  fields: [
    defineField({
      name: "bookImage",
      title: "Book Image",
      type: "image",
      description: "Upload a book image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
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
      name: "link",
      title: "Link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
