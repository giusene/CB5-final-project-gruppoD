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
  const [easyQuestions, setEasyQuestions] = useState([]);
  const [mediumQuestions, setMediumQuestions] = useState([]);
  const [hardQuestions, setHardQuestions] = useState([]);

  const [backgroundControl, setBackgroundControl] = useState(0);
  const [color, setColor] = useState(
    "linear-gradient(to bottom, #2d92ff, #3fa8ff, #5ebcff, #82cfff, #a8e1ff)"
  );
  const [answerColor, setAnswerColor] = useState("white");
  const [text, setText] = useState("First manche");

  useEffect(() => {
    Promise.all([GET("easy"), GET("medium"), GET("hard")]).then((res) => {
      let easyQuestions = res[0].results.map((item) => {
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
      setQuestions(easyQuestions);
      setEasyQuestions(easyQuestions);

      let mediumQuestions = res[1].results.map((item) => {
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

      setMediumQuestions(mediumQuestions);
      let hardQuestions = res[2].results.map((item) => {
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

      setHardQuestions(hardQuestions);
      setTimeout(() => {
        setQuestions(mediumQuestions);
        setBackgroundControl(1);
        setText("Second manche");
        setColor(
          "linear-gradient(to bottom, #ffaf34, #ff9b2d, #ff862b, #ff6f2d, #ff5633)"
        );
      }, 60000);
      setTimeout(() => {
        setQuestions(hardQuestions);
        setBackgroundControl(2);
        setText("Third manche");
        setColor(
          "linear-gradient(to bottom, #dc0000, #b60b04, #920f06, #6f1004, #4e0e00)"
        );
      }, 120000);
    });
  }, []);

  const refreshPage = () => {
    navigate(0);
  };

  const getAnswer = (answer) => {
    if (answer === questions[questionNumber].correct_answer) {
      setScore(score + 1);
      setAnswerColor("green");
      console.log("nice");
    } else {
      setAnswerColor("red");
    }
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
      setAnswerColor("white");
    }, 1000);

    console.log(score);
  };

  return (
    <>
      <div className={styles.GamePage} style={{ background: color }}>
        <div className={styles.Buttons}>
          <button className={styles.BtnHome} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHouseChimneyUser} />
          </button>
          <h1>{text}</h1>
          <Link to=".">
            <button className={styles.BtnRefresh} onClick={() => refreshPage()}>
              <FontAwesomeIcon icon={faRotate} />
            </button>
          </Link>
        </div>

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
                  style={{
                    backgroundColor: answerColor,
                  }}
                  onMouseUp={() => getAnswer(textReplacer(item))}
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
