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
          Welcome to the <b>Quiz-Zone</b>, <br/>
          where you can experience an engaging game. <br/>
          Score the highest amount of points <br/>
          by answering the questions until time runs out. <br/>
          Don't waste any more time, test your skills <br/>
          and become the next champion!
        </p>
        <ModalHome />
     </div>
    <Outlet />
    </>
  );
};

export default Hero;
