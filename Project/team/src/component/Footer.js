import styles from './css/footer.module.css'
import Container from "react-bootstrap/Container";

export const Footer = (props) => {
    return (
        <div className={styles.Container}>
            <Container>
                <div className={styles.flexContainer}>

                    <div>
                        <img className={styles.img} src={props.img}></img>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </div>
                    <div className={styles.secondaryColumn}>
                        <p>Use Cases</p>
                        <p>UI Design</p>
                        <p>UX Design</p>
                        <p>Prototyping</p>
                        <p>UI Design</p>
                        <p>UX Design</p>
                        <p>Prototyping</p>
                    </div>
                    <div className={styles.secondaryColumn}>
                        <p>Explore</p>
                        <p>Figma</p>
                        <p>Customers</p>
                        <p>Why I Love Figma</p>
                        <p>Figma</p>
                        <p>Customers</p>
                        <p>Why I Love Figma</p>
                    </div>
                    <div className={styles.secondaryColumn}>
                        <p>Resources</p>
                        <p>Commmunity Resources</p>
                        <p>Support</p>
                        <p>Educattion</p>
                        <p>Community Resoruces</p>
                        <p>Support</p>
                        <p>Education</p>
                    </div>
                    <div className={styles.lastRow}>
                        <p>Subscribe to our newsletter</p>
                        <input placeholder='Email'></input>

                    </div>
                </div>
            </Container>
        </div>
    )
}