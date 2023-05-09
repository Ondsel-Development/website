import React from "react";
import clsx from "clsx";
import CheckIcon from "@site/src/components/Icons/CheckIcon";
import PendingIcon from "@site/src/components/Icons/PendingIcon";

import styles from "./styles.module.css";

export default function PricingCardFeatureItem({ feature }) {
  return (
    <div className={clsx(styles.pricingCardFeatureItem)}>
      {feature.status === "completed" && <CheckIcon />}
      {feature.status === "pending" && <PendingIcon />}
      <span className="text_2xl ml_2">{feature.title}</span>
    </div>
  );
}
