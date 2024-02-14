import React from "react";
import styles from "@/scss/app/stories/stories.module.scss";
import Link from "next/link";
import Image from "next/image";
import { isUrl } from "@/utils/utils";

export const dynamic = "force-dynamic";

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stories`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

const Stories = async () => {
    const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {data.map((item) => (
                <Link key={item.id} href={`/stories/${item._id}`} className={styles.container}>
                    <div className={styles.imageContainer}>
                        {item.image.length > 0 && isUrl(item.image) ? (
                            <Image
                                src={item.image}
                                alt=""
                                width={400}
                                height={250}
                                className={styles.image}
                            />
                        ) : (
                            <span>No Image</span>
                        )}
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Stories;
