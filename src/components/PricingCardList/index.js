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
    </>
  );
}
