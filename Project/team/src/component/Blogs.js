import styles from "./css/blogs.module.css";
import {News} from "./News";
import rProfileImg from "../img/Ellipse.svg";
import nHeadImg from "../img/Head.svg";
import Data from "./news.json"
export const Blogs = () => {
  return (
    <div className={styles.Container}>
      {/* <News
        text1="  Data-Driven Design is Killing Our Instincts"
        text2="Our latest updates and blogs about managing your team"
        text3="Jane Cooper"
        text4="|"
        text5="2nd January, 2022"
        image={nHeadImg}
        image2={rProfileImg}
      /> */}
      {Data.map((data,index)=>(
        <News key={data+index} text1={data.text1}></News>
      ))}
    </div>
  );
};
