import React, { useState } from "react";
import { MdSportsScore } from "react-icons/md";
import styles from "./styles.module.scss";

const ModalHome = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className= {styles.container}>
      <button className={styles.btnScore} onClick={openModal}>
        <h4>Score Record</h4>
        <span>
            <MdSportsScore />
        </span>
        </button>
      {showModal && (
        <div className={`${styles.Modal} ${showModal ? styles.open : ""}`}>
          <div className={styles.Modal}>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>Score</h2>
              <ul>
                <li>
                  <div className={styles.name}>
                    <img src="./antonella.png"/><h4>Antonella</h4>
                  </div>
                  <div className={styles.score}>
                    <h4>10</h4>
                  </div>
                </li>
                <li>
                  <div className={styles.name}>
                    <img src="./martina.png"/><h4>Martina</h4>
                  </div>
                  <div className={styles.score}>
                    <h4>20</h4>
                  </div>
                </li>
                <li>
                  <div className={styles.name}>
                    <img src="./carlotta.png"/><h4>Carlotta</h4>
                  </div>
                  <div className={styles.score}>
                    <h4>30</h4>
                  </div>
                </li>
                <li>
                  <div className={styles.name}>
                    <img src="./davin.png"/><h4>Davin</h4>
                  </div>
                  <div className={styles.score}>
                    <h4>40</h4>
                  </div>
                </li>
                <li>
                  <div className={styles.name}>
                    <img src="./francesca.png"/><h4>Francesca</h4>
                  </div>
                  <div className={styles.score}>
                    <h4>50</h4>
                  </div>
                </li>
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
