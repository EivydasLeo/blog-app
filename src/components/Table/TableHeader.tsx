import React from "react";
import { type TableHeaderProps } from "@/utils/dummyData/props";

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
    return (
        <thead>
            {headers.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
        </thead>
    );
};

export default TableHeader;
