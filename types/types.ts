import { PortableTextBlock } from "sanity";
import { Url } from "url";

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

export type PhotoType = {
  _id: string;
  title: string;
  alt: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
};

export type SlideType = {
  _id: string;
  slides: PhotoType[];
};

export type AboutType = {
  _id: string;
  name: string;
  headline: string;
  bio: PortableTextBlock[];
  writing: PortableTextBlock[];
  books: [
    {
      _key: string;
      title: string;
      link: Url;
    },
  ];
  articles: [
    {
      _key: string;
      title: string;
      link: Url;
    },
  ];
};

export type StorieTypes = {
  _id: string;
  title: string;
  slug: string;
  storie: PortableTextBlock[];
};

export type BookType = {
  _id: string;
  bookImage: {
    alt: string;
    image: string;
  };
  description: PortableTextBlock[];
  link: string;
};
