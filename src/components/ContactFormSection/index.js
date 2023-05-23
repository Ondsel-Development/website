import React from "react";

import ContactForm from "@site/src/components/ContactForm";

import styles from "./styles.module.css";

export default function ContactFormSection() {
  return (
    <section className={styles.contactFormSection}>
      <ContactForm />
      <div className="relative">
        <img src="/img/ondsel_otpassembly.png" alt="Join the waitlist" />
      </div>
    </section>
  );
}
