import styles from "./Home.module.css"
import savings from "../../img/saving-costs.svg"
import LinkButton from "../layout/LinkButton"
import { FaArrowCircleRight } from "react-icons/fa"

function Home() {

    return(
        <section className={styles.home_container}>
            <div className={styles.content}>
                <h1>Bem vindo ao <span><br></br>Costs.</span></h1>
                <p>Comece a criar e gerenciar os seus projetos de maneira <br/>
                <strong>fácil</strong> e <strong>rápida</strong>. Agora mesmo!</p>
                <LinkButton to="/newproject" text="Criar Projeto" icon={FaArrowCircleRight}/>    
            </div>
                <img src={savings} alt="Costs"/>
        </section>
    )
}

export default Home