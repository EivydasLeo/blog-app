import { type PortableTextBlock } from "sanity";
import { type Url } from "url";

export interface AuthorType {
    _id: string;
    name: string;
    headline: string;
    profileImage: {
        alt: string;
        image: string;
    };
    bio: PortableTextBlock[];
}

export interface PhotoType {
    _id: string;
    title: string;
    alt: string;
    image: {
        asset: {
            _id: string;
            url: string;
        };
    };
}

export interface SlideType {
    _id: string;
    slides: PhotoType[];
}

export interface AboutType {
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
}

export interface StorieTypes {
    _id: string;
    title: string;
    slug: string;
    storie: PortableTextBlock[];
}

export interface BookType {
    _id: string;
    bookImage: {
        alt: string;
        image: string;
    };
    description: PortableTextBlock[];
    link: string;
}
