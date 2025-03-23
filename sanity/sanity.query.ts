import { groq } from "next-sanity";
import client from "./sanity.client";
import {
    type PhotoType,
    type AuthorType,
    type SlideType,
    type AboutType,
    type StorieTypes,
    type BookType,
} from "@/types/types";

export async function getAuthor(locale: string): Promise<AuthorType[]> {
    return await client.fetch(
        groq`*[_type == "author"]{
      _id,
      "name": name[$locale],
      "headline": headline[$locale],
      "profileImage": {
        "image": profileImage.asset->url,
        "alt": profileImage.alt[$locale],
      },
      "bio": bio[$locale],
    }`,
        { locale },
    );
}

export async function getPhoto(): Promise<PhotoType[]> {
    return await client.fetch(
        groq`*[_type == "photo"]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      alt,
      image {
        asset -> {
          _id,
          url
        }
      }
    }`,
    );
}

export async function getSlide(): Promise<SlideType> {
    return await client.fetch(
        groq`*[_type == "slides"] {
      _id,
      slides[]-> { 
        _id,
        title,
        alt,
        image {
          asset -> {
            _id,
            url
          }
        }
      }
    }`,
    );
}

export async function getAbout(locale: string): Promise<AboutType> {
    return await client.fetch(
        groq`*[_type == "about"]{
      _id,
      "name": name[$locale],
      "headline": headline[$locale],
      "bio": bio[$locale],
      "writing": writing[$locale],
      books,
      articles
    }`,
        { locale },
    );
}

export async function getStories(locale: string): Promise<StorieTypes> {
    return await client.fetch(
        groq`*[_type == "stories"]{
      _id,
      "title": title[$locale],
      "storie": storie[$locale],
      "slug": slug.current
    }`,
        { locale },
    );
}

export async function getSingleStorie(locale: string, slug: string): Promise<StorieTypes> {
    return await client.fetch(
        groq`*[_type == "stories" && slug.current == $slug][0]{
      _id,
      "title": title[$locale],
      "storie": storie[$locale],
    }`,
        { locale, slug },
    );
}

export async function getBook(locale: string): Promise<BookType> {
    return await client.fetch(
        groq`*[_type == "books"]{
      _id,
      bookImage {alt, "image": asset->url},
      "description": description[$locale],
      link
    }`,
        { locale },
    );
}
