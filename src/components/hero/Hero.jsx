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
          controls
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
          Welcome to the <b>Quiz-Zone</b>, where you can test your knowledge <br/>
          while experiencing a fun and engaging game. <br/>
          A match consists of {""}
          <b>three rounds</b>, lasting only 60 seconds each. <br/>
          Your goal is to accumulate the highest amount of points possible <br/>
          by answering the questions until time runs out. <br/>
          Each correct answer will earn you {""}
          <b>1 point</b> <br/>
          and each wrong answer will not increase your score. <br/>
          Don't waste any more time, test your current skills <br/>
          and become the next champion <br/> reaching the top of the leaderboard!
        </p>
        <ModalHome />
     </div>
    <Outlet />
    </>
  );
};

export default Hero;
