import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getAuthor(locale: string) {
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

export async function getPhoto() {
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

export async function getSlide() {
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

export async function getAbout(locale: string) {
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

export async function getStories(locale: string) {
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

export async function getSingleStorie(locale: string, slug: string) {
    return await client.fetch(
        groq`*[_type == "stories" && slug.current == $slug][0]{
      _id,
      "title": title[$locale],
      "storie": storie[$locale],
    }`,
        { locale, slug },
    );
}

export async function getBook(locale: string) {
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
