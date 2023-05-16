import React from "react";
import clsx from "clsx";
import CheckIcon from "@site/src/components/Icons/CheckIcon";
import PendingIcon from "@site/src/components/Icons/PendingIcon";

import styles from "./styles.module.css";

export default function PricingCardFeatureItem({ feature }) {
  return (
    <div className={clsx(styles.pricingCardFeatureItem)}>
      <div className={styles.pricingCardFeatureItemIcon}>
        {feature.status === "completed" && <CheckIcon width={28} height={28} />}
        {feature.status === "pending" && <PendingIcon width={28} height={28} />}
      </div>
      <span className="text_base ml_2 leading_28">{feature.title}</span>
    </div>
  );
}
