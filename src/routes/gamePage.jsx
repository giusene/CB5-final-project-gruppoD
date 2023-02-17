import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { GET } from "../utils/api";
import { useState, useEffect } from "react";
import { textReplacer } from "../utils/textReplacer";
import TimeBar from "../components/timeBar/TimeBar";
import sortArrayRandomly from "../utils/sortArrayRandomly";

const GamePage = () => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    GET("easy").then((res) => {
      console.log(res.results);
      let newQuestions = res.results.map((item) => {
        const newItem = {
          ...item,
          allQuestions: sortArrayRandomly([
            item.correct_answer,
            item.incorrect_answers[0],
            item.incorrect_answers[1],
            item.incorrect_answers[2],
          ]),
        };
        return newItem;
      });
      setQuestions(newQuestions);
    });
  }, []);

  return (
    <>
      <div className={styles.GamePage}>
        <div className={styles.Question}>
          <div className={styles.userInfo}>
            <h4>Nome Utente</h4>
            <img src="https://picsum.photos/50/50" alt="Avatar" />
          </div>
          {questions.map((item, index) => (
            <p key={index}>{textReplacer(item.question)}</p>
          ))}
          <h2>{post.body}</h2>
        </div>

        <TimeBar />
        <div className={styles.AnswerContainer}>
          <div className={styles.Answer}>
            {questions.map((item, index) => (
              <p key={index}>{textReplacer(answer[0])}</p>
            ))}
          </div>

          <div className={styles.Answer}>
            {questions.map((item, index) => (
              <p key={index}>{textReplacer(item.[1])}</p>
            ))}
          </div>
        </div>
        <div className={styles.AnswerContainer}>
          <div className={styles.Answer}>
            {/* {post.map((item, index) => (
              <p key={index}>{textReplacer(item.results[2])}</p>
            ))} */}
          </div>

          <div className={styles.Answer}>
            {/* {post.map((item, index) => (
              <p key={index}>{textReplacer(item.results[3])}</p>
            ))} */}
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};
export default GamePage;
