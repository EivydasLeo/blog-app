import React from "react";
import styles from "../../scss/components/Copyright/copyright.module.scss";
import { CopyrightData } from "../../utils/dummyData/data";

export const Copyright: React.FC = () => {
  const { copyrightDate, copyrightText } = CopyrightData;
  return (
    <div className={styles.container}>
      <span className={styles.text}>{copyrightDate}</span>
      <span className={styles.text}>{copyrightText}</span>
    </div>
  );
};
