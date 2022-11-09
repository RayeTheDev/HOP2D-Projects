import styles from "./css/blogs.module.css";
import { News } from "./News";
import rProfileImg from "../img/Ellipse.svg";
import nHeadImg from "../img/Head.svg";
import Data from "./news.json"
import headImg from "../img/Head.svg"
import profileImg from "../img/Ellipse.svg"

export const Blogs = () => {

  const img = [headImg, profileImg]

  return (
    <div className={styles.Container}>
      <div className={styles.titleCont}>
        <span className={styles.title}> Blog Posts</span>
        <span className={styles.text}>Our latest updates and blogs about managing your team</span>
      </div>
      <div className={styles.blogsCont}>
        <div className={styles.blogsInnerCont}>

          {Data.map((data, index) => (
            <News key={data + index} image={img[data.image]} image2={img[data.image2]} text1={data.text1} text2={data.text2} text3={data.text3} text4={data.text4} text5={data.text5}></News>
          ))}
        </div>
      </div>

    </div>
  );
};
