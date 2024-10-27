import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
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
        source: "name.en",
        maxLength: 96,
      },
    }),

    defineField({
      name: "headline",
      title: "Headline",
      type: "localeString",
      description: "In one short sentence, what do you do?",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "localeString",
        }),
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "localeBlockContent",
    }),
  ],

  preview: {
    select: {
      title: "name.en",
      media: "profileImage",
    },
  },
});
