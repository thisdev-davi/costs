import styles from "./Footer.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {

    return(
        <footer className={styles.footer}>
            <p><span>Copyright</span> &copy; Costs 2025</p>
                <ul className={styles.social_list}>
                    <li>
                        <a href="https://github.com/thisdev-davi" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dev-davioliveira/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                    </li>
                </ul>
        </footer>
    )
}

export default Footer;