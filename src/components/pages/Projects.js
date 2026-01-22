import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"

import styles from "./Projects.module.css"
import { FaArrowCircleRight } from "react-icons/fa"

function Projects() {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
        })
        .catch(err => console.log(err))
    }, [])

    const location = useLocation()
    let message = ""
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.projects_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" icon={FaArrowCircleRight} />
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name || "Sem titulo"}
                            budget={project.budget || 0}
                            category={project.category?.name || "Sem categoria"}
                            key={project.id}
                        />
                    ))
                }
            </Container>
        </div>
    )
}

export default Projects