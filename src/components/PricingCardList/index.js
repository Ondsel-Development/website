import React from "react";
import PricingCard from "@site/src/components/PricingCard";
import PendingIcon from "@site/src/components/Icons/PendingIcon";
import CheckIcon from "@site/src/components/Icons/CheckIcon";

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
      <CheckIcon />
      <span className="text_2xl ml_2 text_gray">Feature complete</span>
      </div>
      <div className="flex flex_row items_center justify_center w_full">
      <PendingIcon />
      <span className="text_2xl ml_2 text_gray">Feature in developement</span>
      </div>

    </>
  );
}
