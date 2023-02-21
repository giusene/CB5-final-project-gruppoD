import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import FireworksComponent from "../fireworks/Fireworks";
import background from "./background.webm";
import { writeDb } from "../../utils/writeDb";

const ModalScore = ({ score }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setTimeout(() => setShowModal(true), 180000);
    const starCountRef = ref(database);

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const { scoreboard } = data;
      setScores(scoreboard);
    });
  }, []);

  const handleButtonClick = () => {
    navigate("/");
  };
  const aggiungiGiocatore = () => {
    const newPlayer = {
      avatar: 1,
      m1: 12,
      m2: 10,
      m3: 5,
      score: 27,
      name: "Pippo",
    };

    writeDb(newPlayer, score);
  };

  return (
    <>
      {showModal && (
        <div className={styles.Modal}>
          <video className={styles.background} autoPlay loop muted>
            <source src={background} type="video/mp4" />
          </video>
          <FireworksComponent />
          <div className={styles.modalContent}>
            <h2>Time's Up!</h2>
            <p>Your score is: {score}</p>
            <button className={styles.BtnHome} onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faHouseChimneyUser} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalScore;
