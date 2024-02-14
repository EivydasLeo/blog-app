import React from "react";
import styles from "@/scss/components/Table/table.module.scss";
import { type TableProps } from "@/utils/dummyData/props";
import TableHeader from "./TableHeader";
import { TableData } from "@/utils/dummyData/data";
import TableBody from "./TableBody";

const storiesHeaders = Object.keys(TableData.storiesData[0]);

const Table: React.FC<TableProps> = ({ stories, onDelete }) => (
    <table className={styles.table}>
        <TableHeader headers={storiesHeaders} />
        <TableBody stories={stories} onDelete={onDelete} />
    </table>
);

export default Table;
