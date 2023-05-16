import React, { useMemo } from "react";
import clsx from "clsx";
import PricingCardFeatureItem from "@site/src/components/PricingCardFeatureItem";

import styles from "./styles.module.css";

export default function PricingCard({ plan }) {
  const bgStyle = useMemo(() => ({ background: plan?.bgColor }), [plan?.bgColor])

  return (
    <div className={clsx("relative rounded_5xl", styles.pricingCard)} style={bgStyle}>
      <div className="relative z_40 text_gray flex flex_col justify_between h_full">
        <div>
          <div className="min_h_20 pt_4">
            <h3 className="text_2xl text_center">{plan.name}</h3>

            {plan.description && (
              <p className="text_2xl text_center">{plan.description}</p>
            )}
            <div className="text_3xl text_center pt_2">{plan.price}</div>
          </div>

          {plan.cta && (
            <div className="w-full flex flex_row items_center justify_center mt_6">
              {plan.cta === "signup" && (
                <button
                  className={clsx(
                    "button text_xl text_center ease_in_out duration_300",
                    styles.ctaButton
                  )}
                >
                  WAITLIST
                </button>
              )}
              {plan.cta === "buy-now" && (
                <button
                  className={clsx(
                    "button text_xl text_center ease_in_out duration_300",
                    styles.ctaButton
                  )}
                >
                  WAITLIST
                </button>
              )}
              {plan.cta === "contact-us" && (
                <button
                  className={clsx(
                    "button text_xl text_center ease_in_out duration_300",
                    styles.ctaButton
                  )}
                >
                  EMAIL US
                </button>
              )}
            </div>
          )}

          <div className="flex flex_col space_y_2 mt_8">
            {plan.features.map((feature) => (
              <PricingCardFeatureItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
