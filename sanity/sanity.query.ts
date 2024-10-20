import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getAuthor() {
  return client.fetch(
    groq`*[_type == "author"]{
      _id,
      name,
      headline,
      profileImage {alt, "image": asset->url},
      bio
    }`
  );
}

export async function getPhoto() {
  return client.fetch(
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
    }`
  );
}

export async function getSlide() {
  return client.fetch(
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
    }`
  );
}

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"]{
      _id,
      name,
      headline,
      bio,
      writing,
      books,
      articles
    }`
  );
}

export async function getStorie() {
  return client.fetch(
    groq`*[_type == "stories"]{
      _id,
      title,
      storie
    }`
  );
}

export async function getBook() {
  return client.fetch(
    groq`*[_type == "books"]{
      _id,
      bookImage {alt, "image": asset->url},
      description,
      link
    }`
  );
}
