import { Dropdown } from "react-bootstrap";
import styles from "./assets/profile.module.css";
import { useAuth } from "./contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth";

export const Profile = () => {
  const { currentUser } = useAuth();
  const auth = getAuth();
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Dropdown style={{ borderRadius: "30px" }}>
      <div
        className={
          currentUser ? styles.container : `${styles.container} ${styles.none}`
        }>
        <Dropdown.Toggle className={styles.profile}>
          <img
            className={styles.proImg}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
          <span className={styles.texts}>
            {currentUser && currentUser.email}
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
          <Dropdown.Item onClick={SignOut} href="#/action-3">
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </div>
    </Dropdown>
  );
};
