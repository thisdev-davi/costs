import styles from "./Footer.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {

    return(
        <footer className={styles.footer}>
            <p><span>Copyright</span> &copy; Costs 2025</p>
                <ul className={styles.social_list}>
                    <li><FaGithub /></li>
                    <li><FaLinkedin /></li>
                </ul>
        </footer>
    )
}

export default Footer;