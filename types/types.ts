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
  slide: PhotoType[];
};
