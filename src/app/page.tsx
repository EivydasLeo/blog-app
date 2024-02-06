// import Image from "next/image";
import styles from "@/scss/app/page.module.scss";
import Button from "@/components/Button/Button";
import React from "react";
export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <span>------Welcome</span>
                <h1 className={styles.title}>I’m Greta Ska</h1>
                <h2>Food Critic / Influencer / Blogger</h2>
                <p className={styles.desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil molestiae
                    voluptas suscipit, odio delectus veritatis, dolore a fugit vero commodi illum
                    corrupti incidunt ut nesciunt magnam accusantium mollitia. Odit debitis non
                    excepturi ea rem iusto repellendus, tempora, reiciendis ex, facere provident
                    quaerat molestias consequatur! Ipsum quis ipsam minus omnis numquam dolorem ea,
                    rerum impedit nostrum fugiat deserunt animi corrupti esse id dolores maiores?
                    Rem numquam possimus quas atque officia est, vel veritatis eligendi blanditiis
                    porro quae labore laboriosam animi perferendis quasi! Modi molestiae laborum
                    quae commodi natus deleniti. Perferendis natus neque dolorem dignissimos nam
                    ducimus, consequatur harum labore illum!
                </p>
                <Button text="My stories" url="/" />
            </div>
        </div>
    );
}
