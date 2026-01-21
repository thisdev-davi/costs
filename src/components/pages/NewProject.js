import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"
import { useNavigate } from "react-router-dom";

function NewProject() {
    
    const navigate = useNavigate()
    function createPost(project){
        // initialize cost and services
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body : JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate("/projects", {state: {message: "Projeto criado com sucesso"}});
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <div className={styles.project_content}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projet para começar a planejar seu evento. Após a criação, você poderá gerenciar todos os seus serviços.</p>
                <ProjectForm handleSubmit={createPost} btnText="Criar     Projeto" />
            </div>
        </div>
    )
}

export default NewProject