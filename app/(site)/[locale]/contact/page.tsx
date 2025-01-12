import React from "react";
import styles from "@/app/styles/contact/contact.module.scss";
import { ContactForm } from "@/app/components/ContactForm/ContactForm";

export const metadata = {
  title: "Contact",
  description: "This is contact page",
};

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  );
};
export default Contact;
