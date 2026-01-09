import styles from "./SubmiteButton.module.css"

function SubmitButton({text, icon: Icon}){

    return (
        <div>
            <button className={styles.btn}>
                {text}
                {Icon && <Icon className={styles.icon} size={16} />}
            </button>
        </div>
    )
}

export default SubmitButton