import styles from '../assets/login.module.css'
import Logo from "../assets/img/logo-default.svg";
import { Button, Container } from 'react-bootstrap';

export const Login = () => {
    return (
        <div className={styles.Container}>

            <img src={Logo} className={styles.logo}></img>
            <div className={styles.formContainer}>
                <div style={{display: "flex", justifyContent: "center"}}>
                <p className={styles.title}>Нэвтрэх</p>
                </div>
                
                <div className={styles.inCont}>
                    <label>Цахим хаяг</label>
                    <input className={styles.inp} placeholder="name@mail.domain"></input>
                </div>  
                <div className={`${styles.inCont} ${styles.marginTop}`}>
                    <label>Нууц үг</label>
                    <input className={styles.inp} placeholder="••••••••••"></input>
                </div>  
                <div className={styles.checkCont}>
                    <input className={styles.checkBox} type="checkbox"></input>
                    <span className={styles.text}>Намайг сана</span>
                </div>
                <Button variant="success" className={styles.button}>Нэвтрэх</Button>
            </div>

        </div>
    )
}