import React from "react";
import styles from "@/app/styles/stories/stories.module.scss";

const Stories = () => {
  return (
    <div className={styles.container}>
      Short stories without images with different type of fontstyles
      <div key={"keyId"}>
        <div>
          <p>{"Description"}</p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
