export const isUrl = (str: string): boolean => {
    const urlRegex = /^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(str);
};

export const formatDateString = (dateString: Date): string => {
    return new Date(dateString).toLocaleDateString();
};
