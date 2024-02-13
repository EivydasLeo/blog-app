import { type StoriesLayoutProps } from "@/utils/dummyData/props";
import React from "react";

const StoriesLayout = ({ children }: StoriesLayoutProps): React.JSX.Element => {
    return <div>{children}</div>;
};

export default StoriesLayout;
