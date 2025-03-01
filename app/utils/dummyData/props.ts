import { type ReactNode } from "react";

export interface LinksProps {
    isFooter?: boolean;
}

export interface ButtonLinkProps {
    text: string;
    url: string;
}

export interface StoryProps {
    _id: string;
    createdAt: Date;
    username: string;
    desc?: string;
}

export interface TableProps {
    stories: StoryProps[];
    onDelete: (id: string) => void;
}

export interface StoriesLayoutProps {
    children: ReactNode;
}

export interface TableHeaderProps {
    headers: string[];
}

export interface TableBodyProps {
    stories: StoryProps[];
    onDelete: (id: string) => void;
}
