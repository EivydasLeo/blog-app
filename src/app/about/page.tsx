import React from "react";
import styles from "@/scss/app/about/about.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src="https://picsum.photos/1600/400"
                    fill={true}
                    alt=""
                />
                <div className={styles.imgText}>
                    <h1>Digital storytellers</h1>
                    <h2>Handcrafting awards winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who we are?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
                        asperiores beatae consequatur culpa cum delectus distinctio, dolores
                        eligendi eos eveniet facere hic incidunt iste, labore laborum laudantium nam
                        nesciunt nisi nostrum officia quae qui quos repudiandae sit tenetur ut vero.
                        A aspernatur aut, exercitationem facere incidunt ipsum iusto magni maxime
                        molestias mollitia nisi optio possimus quaerat quis quisquam, ratione
                        repudiandae sequi sint sit, vitae? Architecto aspernatur beatae cumque
                        doloribus eos eveniet in incidunt iste iusto laudantium magnam magni maxime
                        modi, nam nesciunt odit, omnis optio pariatur praesentium provident quaerat
                        quia quisquam quo reiciendis repellat reprehenderit sint unde veritatis
                        voluptatum.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What we do?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
                        odit.
                    </p>
                    <Button text="Contact" url="/contact" />
                </div>
            </div>
        </div>
    );
};
export default About;
