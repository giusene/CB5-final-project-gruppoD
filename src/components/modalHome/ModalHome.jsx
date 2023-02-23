import { useState, useEffect } from "react";
import { MdSportsScore } from "react-icons/md";
import styles from "./styles.module.scss";
import { ref, onValue } from "firebase/database";
import { database } from "./../../utils/firebase";
import { options } from './../select/Select';

const ModalHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const scoresRef = ref(database, "scoreboard");
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      const scoresList = [];
      for (let id in data) {
        scoresList.push({ id, ...data[id] });
      }
      setScores(scoresList);
    });
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btnScore} onClick={openModal}>
        <h4>Leaderboard</h4>
        <span>
            <MdSportsScore />
        </span>
        </button>
      {showModal && (
        <div className={`${styles.Modal} ${showModal ? styles.open : ""}`}>
          <div className={styles.Modal}>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>Best Scores</h2>
              <ul>
                {scores.map((score) => (
                  <li key={score.id}>
                    <div className={styles.name}>
                      <img src={options.find((option) => option.avatar === score.avatar).image} alt={score.name} />
                      <h4>{score.name}</h4>
                    </div>
                    <div className={styles.score}>
                      <h4>{score.score}</h4>
                    </div>
                  </li>
                ))}
              </ul>
              <button className={styles.modalCloseBtn} onClick={closeModal}>
                ❌
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalHome;
