import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject() {

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projet para começar a planejar seu evento. Após a criação, você poderá gerenciar todos os seus serviços.</p>
            <ProjectForm btnText="Criar     Projeto" />
        </div>
    )
}

export default NewProject