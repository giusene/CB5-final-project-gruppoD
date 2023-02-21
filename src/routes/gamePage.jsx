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

import useSound from 'use-sound';
import soundCorrect from './sounds/sound_correct.mp3';
import soundIncorrect from './sounds/sound_incorrect.mp3';

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
  const [text, setText] = useState("First manche");

  const [playCorrect] = useSound(soundCorrect);
  const [playIncorrect] = useSound(soundIncorrect);

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
      }, 60000);
      setTimeout(() => {
        setQuestions(hardQuestions);
        setBackgroundControl(2);
        setText("Third manche");
      }, 120000);
    });
  }, []);

  const refreshPage = () => {
    navigate(0);
  };

  const getAnswer = (answer) => {
    if (answer === questions[questionNumber].correct_answer) {
      setScore(score + 1);
      playCorrect();
    } else {
      playIncorrect();
    };

    setQuestionNumber(questionNumber + 1);
    console.log(score);
  };

  return (
    <>
      <div className={styles.GamePage}>
        <div className={styles.Buttons}>
          <button 
            className={styles.BtnHome} 
            onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHouseChimneyUser} />
          </button>
          <h1>{text}</h1>
          <Link to=".">
            <button 
              className={styles.BtnRefresh} 
              onClick={() => refreshPage()}>
              <FontAwesomeIcon icon={faRotate} />
            </button>
          </Link>
        </div>
        <video
          className={`${styles.background} ${
            backgroundControl !== 0 && styles.noBackground
          }`}
          autoPlay
          loop
          muted
        >
          <source src={first} type="video/mp4" />
        </video>
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
          <h4>Correct Answer(s): {score}</h4>
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
