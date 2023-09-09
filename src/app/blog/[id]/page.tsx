import React from 'react'
import styles from './page.module.css'
import Image from "next/image";

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>title</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum laboriosam maxime quia
                        quibusdam! Inventore?
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://picsum.photos/1600/400"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>username</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://picsum.photos/1600/400"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque consequuntur corporis
                    cumque dignissimos dolore doloremque dolorum eos ex iure libero nulla officiis omnis, perspiciatis
                    provident, quam reiciendis repellat, repellendus saepe sed tenetur ullam vero? Adipisci autem ea in
                    nisi! Ad deserunt excepturi in non optio perspiciatis quibusdam quisquam, totam velit vitae! Ab
                    accusamus alias, consectetur dolores doloribus fugit libero natus necessitatibus, odio officiis sit
                    tempora ullam voluptas? Alias cupiditate ea est, illum, maiores modi nihil numquam placeat porro,
                    praesentium sint ullam vitae? Dolores dolorum quas recusandae suscipit vero! Adipisci culpa delectus
                    distinctio, iste laudantium maxime qui reiciendis sunt voluptatum?
                </p>
            </div>
        </div>
    );
};

export default BlogPost
