import React from "react";
import styles from "../../scss/components/ButtonLink/buttonLink.module.scss";
import Link from "next/link";
import { type ButtonLinkProps } from "../../utils/dummyData/props";

export const ButtonLink: React.FC<ButtonLinkProps> = ({ text, url }) => {
  return (
    <Link className={styles.container} href={url}>
      {text}
    </Link>
  );
};
