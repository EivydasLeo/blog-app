import React from "react";
import styles from "@/scss/components/button/button.module.scss";
import Link from "next/link";

interface ButtonProps {
    text: string;
    url: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className={styles.container}>{text}</button>
        </Link>
    );
};

export default Button;
