import styles from "./ProjectForm.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import { FaPlusCircle } from "react-icons/fa"

function ProjectForm({btnText}) {

    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Orçamento" name="budget" placeholder="Insira o orçamento total" />
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText} icon={FaPlusCircle}/>
        </form>
    )
}

export default ProjectForm