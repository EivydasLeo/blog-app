import React from "react";
import styles from "@/scss/components/button/button.module.scss";

interface ButtonProps {
    text: React.ReactNode;
    handleClick?: () => void;
    variant?: "small" | "";
    title: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, handleClick, variant, title, disabled }) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const classNames = `${styles.btn} ${variant ? styles[variant] : ""}`;

    return (
        <button className={classNames} onClick={handleClick} title={title} disabled={disabled}>
            {text}
        </button>
    );
};
