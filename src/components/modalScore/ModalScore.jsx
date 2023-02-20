import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

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
          <div className={styles.modalContent}>
            <h2>Congratulations!</h2>
            <p>Your score is: {score}</p>
            <button onClick={handleButtonClick}>Go back to Homepage</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalScore;
