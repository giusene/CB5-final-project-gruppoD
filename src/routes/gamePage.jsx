import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { GET } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function GamePage() {
  const { postID } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    GET(`posts/${postID}`).then((res) => {
      setPost(res);
    });
    return GamePage;
  }, []);

  return (
    <>
      <div className={styles.GamePage}>
        <div className={styles.Question}>
          <div className={styles.userInfo}>
            <h4>Nome Utente</h4>
            <img src="https://picsum.photos/50/50" alt="Avatar" />
          </div>
          <h2>{post.body}</h2>
        </div>

        <h3>questa sarà la barra del tempo</h3>
        <div className={styles.AnswerContainer}>
          <div className={styles.Answer}>
            <h3>risposta numero 1</h3>
          </div>

          <div className={styles.Answer}>
            <h3>risposta numero 2</h3>
          </div>
        </div>
        <div className={styles.AnswerContainer}>
          <div className={styles.Answer}>
            <h3>risposta numero 3</h3>
          </div>

          <div className={styles.Answer}>
            <h3>risposta numero 4</h3>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default GamePage;
