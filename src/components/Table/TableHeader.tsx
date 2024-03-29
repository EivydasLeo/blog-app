import React from "react";
import { type TableHeaderProps } from "@/utils/dummyData/props";

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
