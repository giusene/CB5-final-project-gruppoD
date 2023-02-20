import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faHouseChimneyUser,
} from "@fortawesome/free-solid-svg-icons";
import { GET } from "../utils/api";
import { useState, useEffect } from "react";
import { textReplacer } from "../utils/textReplacer";
import TimeBar from "../components/timeBar/TimeBar";
import sortArrayRandomly from "../utils/sortArrayRandomly";
import first from "./backgrounds/first.webm";
import second from "./backgrounds/second.webm";
import third from "./backgrounds/third.webm";

import ModalScore from "./../components/modalScore/ModalScore";

const GamePage = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [backgroundControl, setBackgroundControl] = useState(0);

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
          setBackgroundControl(1);
          console.log(backgroundControl);
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
          setBackgroundControl(2);
        }),
      120000
    );
  }, []);
  const refreshPage = () => {
    navigate(0);
  };

  const getAnswer = (answer) => {
    if (answer === questions[questionNumber].correct_answer) {
      setScore(score + 1);
    }
    setQuestionNumber(questionNumber + 1);
    console.log(score);
  };

  return (
    <>

      <div className={styles.GamePage}>
        <div className={styles.Buttons}>
          <button className={styles.BtnHome} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHouseChimneyUser} />
          </button>
          <Link to=".">
            <button className={styles.BtnRefresh} onClick={() => refreshPage()}>
              <FontAwesomeIcon icon={faRotate} />
            </button>
          </Link>
        </div>

        <video
          className={`${styles.background} ${
            backgroundControl !== 1 && styles.noBackground
          }`}
          autoPlay
          loop
          muted
        >
          <source src={second} type="video/mp4" />
        </video>
        <video
          className={`${styles.background} ${
            backgroundControl !== 2 && styles.noBackground
          }`}
          autoPlay
          loop
          muted
        >
          <source src={third} type="video/mp4" />
        </video>


        <div className={styles.Question}>
          <div className={styles.userInfo}>
            <h4>Nome Utente</h4>
            <img src="https://picsum.photos/50/50" alt="Avatar" />
          </div>
          {/* {questions.map((item, index) => (
            <p key={index}>{textReplacer(item.question)}</p>
          ))} */}
          {questions[questionNumber] && (
            <h2>{textReplacer(questions[questionNumber].question)}</h2>
          )}
        </div>

        <TimeBar />

        <div className={styles.AnswerContainer}>
          <h4>Right Answer(s): {score}</h4>
          <div className={styles.AnswerGrid}>
            {questions[questionNumber] &&
              questions[questionNumber].allQuestions.map((item, index) => (
                <h5
                  className={styles.Answer}
                  onClick={() => getAnswer(textReplacer(item))}
                  key={index}
                >
                  {textReplacer(item)}
                </h5>
              ))}
          </div>
        </div>

      </div>

      <Outlet />
      <ModalScore score={score} />
    </>
  );
};

export default GamePage;
