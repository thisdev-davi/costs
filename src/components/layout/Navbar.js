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
                        <Link to="/contact">Contato</Link>  
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Sobre nós</Link>
                    </li>
                    <li className={`${styles.item} ${styles.btn_destaque}`}>
                        <Link to="/projects">Veja os projetos</Link>
                    </li>
                </ul> 
            </Container>
        </nav>
    )
}

export default NavBar;