import { Link } from "react-router-dom"

import Container from "./Container";
import styles from "./Navbar.module.css"
import logo from "../../img/logo-costs.svg"

function NavBar() {

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="Costs"></img>
                </Link>
                <ul className={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contact</Link>  
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul> 
            </Container>
        </nav>
    )
}

export default NavBar;