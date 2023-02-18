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
  const [score, setScore] = useState(0);

  useEffect(() => {
    GET("easy").then((res) => {
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
    setTimeout(
      () =>
        GET("medium").then((res) => {
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
        }),
      60000
    );
    setTimeout(
      () =>
        GET("hard").then((res) => {
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
        }),
      120000
    );
  }, []);

  const getAnswer = (answerIndex) => {
    const selectedAnswer = questions[questionNumber].allQuestions[answerIndex];
    if (selectedAnswer === questions[questionNumber].correct_answer) {
      setScore(score + 1);
    }
    const selectedAnswerElement = document.querySelector(
      `p[data-answer="${textReplacer(selectedAnswer)}"]`
    );
    if (selectedAnswerElement) {
      selectedAnswerElement.style.color =
        selectedAnswer === questions[questionNumber].correct_answer
          ? "green"
          : "red";
    }

    setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
    }, 500);
    console.log(score);
  };

  return (
    <>
      <div className={styles.GamePage}>
        <div className={styles.Question}>
          <div className={styles.userInfo}>
            <h4>Nome Utente</h4>
            <img src="https://picsum.photos/50/50" alt="Avatar" />
          </div>
          {questions[questionNumber] && (
            <h2>{textReplacer(questions[questionNumber].question)}</h2>
          )}
        </div>

        <TimeBar />
        <div className={styles.AnswerContainer}>
          <div className={styles.Answer}>
            <h4>Right Answer: {score}</h4>
            {questions[questionNumber] &&
              questions[questionNumber].allQuestions.map((item, index) => (
                <p
                  onClick={() => getAnswer(index)}
                  key={index}
                  data-answer={textReplacer(item)}
                >
                  {textReplacer(item)}
                </p>
              ))}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default GamePage;
