import { PortableTextBlock } from "sanity";

export type AuthorType = {
  _id: string;
  name: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  bio: PortableTextBlock[];
};
