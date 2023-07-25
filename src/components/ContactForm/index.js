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

         <input
           name="subject"
           type="hidden"
           value="Ondsel Beta Signup: New submission from {{ email }}"
         />

          <label htmlFor="purpose">What do you use FreeCAD for:</label>
          <select name="purpose" id="purpose" required>
            <option value="work">Work</option>
            <option value="hobby">Hobby</option>
            <option value="both">Both</option>
          </select>
       <br />

          <label htmlFor="industry">Industry</label>
          <select name="industry" id="industry" required>
            <option value="" disabled selected>Select</option>
            <option value="Aerospace & Defense">Aerospace & Defense</option>
            <option value="Architecture">Architecture</option>
            <option value="Automotive">Automotive</option>
            <option value="Civil engineering">Civil engineering</option>
            <option value="Electronics & High-Tech">Electronics & High-Tech</option>
            <option value="Energy & Resources">Energy & Resources</option>
            <option value="Industrial Machinery">Industrial Machinery</option>
            <option value="Life Sciences">Life Sciences</option>
            <option value="Process Industries">Process Industries</option>
            <option value="Retail & Consumer Products">Retail & Consumer Products</option>
            <option value="Other">Other</option>
            <option value="I'd rather not tell">I'd rather not tell</option>
          </select>


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


