import React from 'react'
import styles from "./About.module.css"
import {getImageUrl} from "../../util";

const About = () => {
  return (
    <section className={styles.container}id='about'>
        <h2 className={styles.title}>about</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="mMe sitting with the laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with a passion for building responsive, scalable, and maintainable</p>
                    </div>
                </li>

                <li className={styles.aboutItem} > 
                    <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with a passion for building scalable, secure, and efficient</p>
                        
                    </div>
                </li>

                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Designer</h3>
                        <p>I'm a UI/UX designer with a passion for building intuitive, user-friendly,</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About