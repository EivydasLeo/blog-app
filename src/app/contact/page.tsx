import React from "react";
import styles from "@/scss/app/contact/contact.module.scss";
import Image from "next/image";
import { Button } from "@/components/Button/Button";

export const metadata = {
    title: "Contact",
    description: "This is contact page",
};

const Contact: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src="" fill={true} alt="" />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea
                        className={styles.textArea}
                        placeholder="message"
                        cols={30}
                        rows={10}
                    ></textarea>
                    <Button text="Send" title="Send" />
                </form>
            </div>
        </div>
    );
};
export default Contact;
