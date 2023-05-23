import React from "react";
import clsx from "clsx";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./styles.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknaekgw");

  return (
    <div className={styles.formWrapper}>
      <form
        onSubmit={handleSubmit}
        className={styles.contactForm}
        disabled={state.submitting || state.succeeded}
      >
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          className={clsx("text_lg", styles.emailInput)}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className={clsx(
            "text_3xl text_black font_medium font_rubik",
            styles.formButton
          )}
        >
          Join
        </button>
        {state.succeeded && (
          <p className="text_gray text_lg">Thanks. We'll be in touch soon!</p>
        )}
      </form>
    </div>
  );
}
