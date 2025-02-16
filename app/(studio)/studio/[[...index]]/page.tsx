"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function Studio(): JSX.Element {
    return <NextStudio config={config} />;
}
