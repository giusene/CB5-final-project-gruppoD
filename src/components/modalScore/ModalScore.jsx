import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";

import FireworksComponent from "../fireworks/Fireworks";
import background from "./background.webm";

const ModalScore = ({ score }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowModal(true), 180000);
  }, []);

  const handleButtonClick = () => {
    navigate("/");
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
