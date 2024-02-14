import React from "react";
import styles from "@/scss/components/Table/tableBody.module.scss";
import { Button } from "../Button/Button";
import { formatDateString, renderImage } from "@/utils/utils";
import { type TableBodyProps, type PostProps } from "@/utils/dummyData/props";

const TableBody: React.FC<TableBodyProps> = ({ posts, onDelete }) => {
    return (
        <tbody>
            {posts.map((post: PostProps) => (
                <tr key={post._id}>
                    <td>{post.username}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>{post.desc}</td>
                    <td className={styles.imgContainer}>{renderImage(post.image, 50, 50)}</td>
                    <td>{formatDateString(post.createdAt)}</td>
                    <td className={styles.delete}>
                        <Button
                            text="Delete"
                            title="Delete"
                            handleClick={() => {
                                onDelete(post._id);
                            }}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
