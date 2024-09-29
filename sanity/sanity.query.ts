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
      slide[]-> { 
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
