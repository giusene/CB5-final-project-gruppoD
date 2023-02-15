import { useState } from 'react';
import { MdSportsScore } from 'react-icons/md';
import styles from './styles.module.scss';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.Hero}>
        <div className={styles.containerTitle}>
            <h1 className={styles.title}>Quiz-Zone!</h1>
            <img className={styles.logo} src="./../lite2.gif" alt="Logo" />
        </div>
      <p className={styles.description}>Benvenuto al <b>Quiz-Zone</b>, 
      dove potrai testare le tue conoscenze in un'esperienza divertente e coinvolgente. 
      Il gioco è composto da <b>tre manches</b>, ognuna della durata di un minuto. 
      Il tuo obiettivo è accumulare il punteggio più alto possibile 
      rispondendo alle domande fino allo scadere del tempo. 
      Ogni domanda corretta ti farà guadagnare <b>10 punti</b>. 
      Non perdere tempo, metti alla prova le tue conoscenze e 
      raggiungi la cima della classifica!!!</p> 
      <button className={styles.btnScore} onClick={openModal}>
        <MdSportsScore />
      </button>

      {showModal && (
        <div className={`${styles.Modal} ${showModal ? styles.open : ''}`}>
          <div className={styles.Modal}>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>Score</h2>
              <button className={styles.modalCloseBtn} onClick={closeModal}>
                ❌
              </button>
              <div className={styles.modalBody}>
                {/* visualizza gli score qui */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Hero;
