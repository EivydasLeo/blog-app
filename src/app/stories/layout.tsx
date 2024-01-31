import React, { type ReactNode } from "react";

interface StoriesLayoutProps {
    children: ReactNode;
}

const StoriesLayout = ({ children }: StoriesLayoutProps) => {
    return (
        <>
            <div>{children}</div>
        </>
    );
};
export default StoriesLayout;
