import React from "react";
import styles from "@/app/styles/components/Divider/divider.module.scss";

interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ text, className }) => {
  return (
    text !== undefined && (
      <div className={`${styles.container} ${className}`}>{text}</div>
    )
  );
};
