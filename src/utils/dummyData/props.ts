import { type ReactNode } from "react";

export interface LinksProps {
    isFooter?: boolean;
    isAuthenticated: boolean;
}

export interface ButtonLinkProps {
    text: string;
    url: string;
}

export interface PostProps {
    _id: string;
    title: string;
    image: string;
    createdAt: Date;
    username: string;
    content: string;
    desc: string;
}

export interface TableProps {
    posts: PostProps[];
    onDelete: (id: string) => void;
}

export interface StoriesLayoutProps {
    children: ReactNode;
}
