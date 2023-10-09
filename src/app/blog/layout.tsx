import React, { ReactNode } from "react";

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <>
            <div>{children}</div>
        </>
    );
};
export default BlogLayout;
