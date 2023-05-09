import React from "react";
import clsx from "clsx";
import PricingCardFeatureItem from "@site/src/components/PricingCardFeatureItem";

import styles from "./styles.module.css";

export default function PricingCard({ plan }) {
  return (
    <div className={clsx("relative", styles.pricingCard)}>
      <img
        className="absolute object_fill inset_0 rounded_5xl z_0"
        src={plan.img}
        alt={plan.name}
      />
      <div className="relative z_40 text_gray flex flex_col justify_between h_full">
        <div>
          <div className="min_h_40">
            <h3 className="text_3xl text_center mt_10">{plan.name}</h3>

            {plan.description && (
              <p className="text_3xl text_center pt_4">{plan.description}</p>
            )}
            <div className="text_5xl text_center pt_4">{plan.price}</div>
          </div>

          <div className="flex flex_col space_y_7 mt_20">
            {plan.features.map((feature) => (
              <PricingCardFeatureItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        {plan.cta && (
          <div className="w-full flex flex_row items_center justify_center">
            {plan.cta === "signup" && (
              <button
                className={clsx(
                  "button text_4xl text_center ease_in_out duration_300",
                  styles.ctaButton
                )}
              >
                SIGN UP
              </button>
            )}
            {plan.cta === "buy-now" && (
              <button
                className={clsx(
                  "button text_4xl text_center ease_in_out duration_300",
                  styles.ctaButton
                )}
              >
                BUY NOW
              </button>
            )}
            {plan.cta === "call-us" && (
              <button
                className={clsx(
                  "button text_4xl text_center ease_in_out duration_300",
                  styles.ctaButton
                )}
              >
                CALL US
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
