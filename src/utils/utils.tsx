import React from "react";
import Image from "next/image";

export const isUrl = (str: string): boolean => {
    const urlRegex = /^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(str);
};

export const formatDateString = (dateString: Date): string => {
    return new Date(dateString).toLocaleDateString();
};

export const renderImage = (image: string, width: number, height: number): React.JSX.Element =>
    image.length > 0 && isUrl(image) ? (
        <Image src={image} alt="Image" width={width} height={height} />
    ) : (
        <span>No Image</span>
    );
