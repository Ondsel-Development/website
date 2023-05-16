import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export default function MainWrapper({ className = "", children }) {
  return (
    <main className={clsx(className, styles.mainWrapper)}>{children}</main>
  );
}
