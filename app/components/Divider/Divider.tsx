import React from "react";
import styles from "../../scss/components/Divider/divider.module.scss";

interface DividerProps {
  text?: string;
}

export const Divider: React.FC<DividerProps> = ({ text }) => {
  return text !== undefined && <div className={styles.container}>{text}</div>;
};
