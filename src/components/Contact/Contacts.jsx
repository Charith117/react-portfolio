import React from 'react'
import {getImageUrl} from "../../util"
import styles from "./Contact.module.css"
export const Contacts = () => {
  return (
    <footer className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="emial icon" />
            <a href="mailto:jayanithacharith7@gmail.com">jayanithacharith7@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linked icon" />
            <a href="https://www.linkedin.com/myname">Linkedin.myname</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="emial icon" />
            <a href="https://github.com/Charith117">github.com/Charith117</a>
        </li>
    </ul>
</footer>
  )
}
