import { Link } from "react-router-dom"
import styles from "./LinkButton.module.css"

function LinkButton( {to, text, icon: Icon}) {

    return (
        <Link className={styles.btn} to={to}>
            {text}
            {Icon && <Icon className={styles.icon} size={16} />
            
            }
        </Link>
    )
}

export default LinkButton