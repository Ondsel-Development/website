import React from "react";
import PricingCard from "@site/src/components/PricingCard";
import PendingIcon from "@site/src/components/Icons/PendingIcon";

import styles from "./styles.module.css";

export default function PricingCardList({ plans }) {
  return (
    <>
      <div className={styles.pricingCardList}>
        {plans.map((plan) => (
          <PricingCard key={plan.slug} plan={plan} />
        ))}
      </div>
      <div className="flex flex_row items_center justify_center w_full">
        <PendingIcon />
        <span className="text_2xl ml_2 text_gray">Coming soon...</span>
      </div>
    </>
  );
}
