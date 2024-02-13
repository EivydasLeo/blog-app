import React from "react";
import styles from "@/scss/components/Table/table.module.scss";
import Image from "next/image";
import { Button } from "../Button/Button";
import { type PostProps, type TableProps } from "@/utils/dummyData/props";

const Table: React.FC<TableProps> = ({ posts, onDelete }) => {
    return (
        <div className={styles.posts}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Created date</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post: PostProps) => (
                        <tr key={post._id}>
                            <td>{post.username}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>{post.desc}</td>
                            <td className={styles.imgContainer}>
                                <Image src={post.image} alt="Image" width={50} height={50} />
                            </td>
                            <td>{new Date(post.createdAt).toLocaleDateString()}</td>
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
            </table>
        </div>
    );
};

export default Table;
