import { useState } from "react";
import { MdSportsScore } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import ModalHome from "../modalHome/ModalHome";

const Hero = () => {
  
  return (
    <>
      <div className={styles.Hero}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Quiz-Zone!</h1>
          <img className={styles.logo} src="./../logo.png" alt="Logo" />
        </div>
        <p className={styles.description}>
          Benvenuto al <b>Quiz-Zone</b>, dove potrai testare le tue conoscenze
          in un'esperienza divertente e coinvolgente. Il gioco è composto da{" "}
          <b>tre manches</b>, ognuna della durata di un minuto. Il tuo obiettivo
          è accumulare il punteggio più alto possibile rispondendo alle domande
          fino allo scadere del tempo. Ogni domanda corretta ti farà guadagnare{" "}
          <b>10 punti</b>. Non perdere tempo, metti alla prova le tue conoscenze
          e raggiungi la cima della classifica!!!
        </p>
        <ModalHome />
     </div>
    <Outlet />
    </>
  );
};

export default Hero;
