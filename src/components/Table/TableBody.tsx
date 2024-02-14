import React from "react";
import styles from "@/scss/components/Table/tableBody.module.scss";
import { Button } from "../Button/Button";
import { formatDateString, renderImage } from "@/utils/utils";
import { type TableBodyProps, type StoryProps } from "@/utils/dummyData/props";

const TableBody: React.FC<TableBodyProps> = ({ stories, onDelete }) => {
    return (
        <tbody>
            {stories?.map((story: StoryProps) => (
                <tr key={story._id}>
                    <td>{story.username}</td>
                    <td>{story.title}</td>
                    <td>{story.content}</td>
                    <td>{story.desc}</td>
                    <td className={styles.imgContainer}>{renderImage(story.image, 50, 50)}</td>
                    <td>{formatDateString(story.createdAt)}</td>
                    <td className={styles.delete}>
                        <Button
                            text="Delete"
                            title="Delete"
                            handleClick={() => {
                                onDelete(story._id);
                            }}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
