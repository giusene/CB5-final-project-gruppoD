import styles from "./styles.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { GET } from "../utils/api";

import { useState, useEffect, useContext } from "react";
import { ApplicationCtx } from "../store";

import sortArrayRandomly from "../utils/sortArrayRandomly";
import useSound from "use-sound";
import soundCorrect from "./sounds/sound_correct.mp3";
import soundIncorrect from "./sounds/sound_incorrect.mp3";

import BackgroundImg from "../components/backgroundImg/backgroundImg";
import GamePageButtons from "../components/gamePageButtons/GamePageButtons";
import GamePageQuestions from "../components/gamePageQuestions/GamePageQuestions";
import GamePageAnswers from "../components/gamePageAnswers/GamePageAnswers";
import ModalScore from "./../components/modalScore/ModalScore";
import TimeBar from "../components/timeBar/TimeBar";

const GamePage = () => {
  const navigate = useNavigate();

  // questions UseStates
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false); // stato per evitare che vengano assegnati più punti dalla stessa domanda
  const [easyQuestions, setEasyQuestions] = useState([]);
  const [mediumQuestions, setMediumQuestions] = useState([]);
  const [hardQuestions, setHardQuestions] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);

  //background UseStates
  const [backgroundControl, setBackgroundControl] = useState(0);
  const [color, setColor] = useState(
    "linear-gradient(to bottom, #2d92ff, #3fa8ff, #5ebcff, #82cfff, #a8e1ff)"
  );
  const [answerColor, setAnswerColor] = useState("white");
  const [text, setText] = useState("First manche");

  //sound UseStates
  const [playCorrect] = useSound(soundCorrect);
  const [playIncorrect] = useSound(soundIncorrect);

  //useContext
  const { state, dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  function createNewItemWithRandomAnswers(item) {
    return {
      ...item,
      allQuestions: sortArrayRandomly([
        item.correct_answer,
        item.incorrect_answers[0],
        item.incorrect_answers[1],
        item.incorrect_answers[2],
      ]),
    };
  }

  useEffect(() => {
    Promise.all([GET("easy"), GET("medium"), GET("hard")]).then((res) => {
      let easyQuestions = res[0].results.map((item) => {
        return createNewItemWithRandomAnswers(item);
      });
      setQuestions(easyQuestions);
      setEasyQuestions(easyQuestions);

      let mediumQuestions = res[1].results.map((item) => {
        return createNewItemWithRandomAnswers(item);
      });

      setMediumQuestions(mediumQuestions);
      let hardQuestions = res[2].results.map((item) => {
        return createNewItemWithRandomAnswers(item);
      });
      setHardQuestions(hardQuestions);
      setTimeout(() => {
        setQuestions(mediumQuestions);
        setQuestionNumber(0);
        setBackgroundControl(1);
        setText("Second manche");
        setColor(
          "linear-gradient(to bottom, #ffaf34, #ff9b2d, #ff862b, #ff6f2d, #ff5633)"
        );
      }, 60000);
      setTimeout(() => {
        setQuestions(hardQuestions);
        setQuestionNumber(0);
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
    if (!hasAnswered) {
      if (answer === questions[questionNumber].correct_answer) {
        setScore(score + 1);
        setHasAnswered(true);
        setAnswerColor("rgba(104, 229, 85, 0.8)");
        playCorrect();
      } else {
        setHasAnswered(true);
        setAnswerColor("rgba(255, 60, 60, 0.8)");
        playIncorrect();
      }
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
        setHasAnswered(false);
        setAnswerColor("white");
      }, 500);
    }
  };

  return (
    <>
      <div className={styles.GamePage}>
        <GamePageButtons
          navigate={navigate}
          text={text}
          refreshPage={refreshPage}
        />
        <BackgroundImg backgroundControl={backgroundControl} />
        <GamePageQuestions
          username={username}
          question={questions[questionNumber]}
        />
        <TimeBar />

        <GamePageAnswers
          question={questions[questionNumber]}
          getAnswer={getAnswer}
          score={score}
          answerColor={answerColor}
        />
      </div>

      <Outlet />
      <ModalScore score={score} />
    </>
  );
};

export default GamePage;
