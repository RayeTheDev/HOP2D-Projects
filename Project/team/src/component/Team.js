import styles from "./css/team.module.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const Team = (props) => {
    return (

        <div className={styles.Container}>
            <div className={styles.innerContainer}>
                <span className={styles.title}>Instant collaborations<br />
                    for remote teams
                </span>
                <span className={styles.texts}>All in one for your remote team chats,<br />
                    collaboration and track projects</span>
                <br />
                <div className={styles.input}>

                    <input type="text" placeholder="Email" />
                    <button >Get Early Access</button>
                </div>
            </div>
        </div>
    )
}