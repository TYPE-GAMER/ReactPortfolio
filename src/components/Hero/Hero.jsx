import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Soumya Prakash</h1>
        <p className={styles.description}>
        I'm Soumya Prakash, a BCA graduate with a strong foundation
         in problem-solving, critical thinking, analytical skills, and Programming Language.  I believe my ability to quickly 
         learn new technologies and adapt to changing requirements . I'm eager to join a Company 
         where I can apply my knowledge and skills to create impactful solutions.
        </p>
        <a href="mailto:google@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
