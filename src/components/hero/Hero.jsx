import { useState } from "react";
import { MdSportsScore } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import ModalHome from "../modalHome/ModalHome";

import elevatorMusic from "./music/elevatorMusic.mp3";

const Hero = () => {
  
  return (
    <>
      <div className={styles.Hero}>
        <audio
          autoPlay
          loop
        >
          <source src={elevatorMusic} type="audio/mpeg" />
        </audio>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Quiz-Zone!</h1>
          <img className={styles.logo} src="./../logo.png" alt="Logo" />
        </div>
        <p className={styles.description}>
          Welcome to the <b>Quiz-Zone </b>, where you can test your knowledge
          while experiencing a fun and engaging game. The quiz consists of {""}
          <b>three rounds </b>, lasting 60 seconds each. Your goal is
          to accumulate the highest amount of points possible by answering the questions
          until time runs out. Each correct question will earn you {""}
          <b>1 point </b>. Don't waste any time, test your skills
          and reach the top of the leaderboard!
        </p>
        <ModalHome />
     </div>
    <Outlet />
    </>
  );
};

export default Hero;
