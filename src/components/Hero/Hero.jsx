import React from 'react'
import styles from "./Hero.module.css";
import {getImageUrl} from"../../util";

const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi im Charith</h1>
        <p className={styles.description}>
            Im Full satck developer but im still lerning things so if you need im here
        </p>
        
        
     <div class="buttonContainer">
         <a href="mailto:jayanithacharith7@gmail.com" class={styles.contactBtn}>Contact me</a>
          <a href="path/to/your/CV.pdf" download class={styles.downloadBtn}>Download CV</a>
    </div>

    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Her" />
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );

};

export default Hero