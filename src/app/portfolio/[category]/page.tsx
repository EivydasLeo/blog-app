import React from "react";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import Image from "next/image";

interface MatchParams {
    category: string; // Define category as a property of params
}

const Category: React.FC<{ params: MatchParams }> = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://picsum.photos/1600/400"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://picsum.photos/1600/400"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://picsum.photos/1600/400"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;
