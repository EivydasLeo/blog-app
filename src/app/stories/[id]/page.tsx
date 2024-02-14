import React from "react";
import styles from "@/scss/app/stories/id/storiesId.module.scss";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isUrl } from "@/utils/utils";

export const dynamic = "force-dynamic";

async function getData(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stories/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound();
    }

    return await res.json();
}

export async function generateMetadata({ params }) {
    const story = await getData(params.id);
    return {
        title: story.title,
        description: story.desc,
    };
}

const StoryPost = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>{data.desc}</p>
                    <div className={styles.author}>
                        {data.image.length > 0 && isUrl(data.image) ? (
                            <Image
                                src={data.image}
                                alt=""
                                width={40}
                                height={40}
                                className={styles.avatar}
                            />
                        ) : (
                            <span>No Image</span>
                        )}
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    {data.image.length > 0 && isUrl(data.image) ? (
                        <Image
                            src={data.image}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.image}
                        />
                    ) : (
                        <span>No Image</span>
                    )}
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>{data.content}</p>
            </div>
        </div>
    );
};

export default StoryPost;
