import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h1>Created with a lot of ☕ by:</h1>
      <ul>
        <li>
          <a href="https://github.com/AntonellaSchillaci">Antonella</a>
        </li>
        <li>
          <a href="https://github.com/CarlottaKiri">Carlotta</a>
        </li>
        <li>
          <a href="https://github.com/DavinGarozzo">Davin</a>
        </li>
        <li>
          <a href="https://github.com/IFranc3sca">Francesca</a>
        </li>
        <li>
          <a href="https://github.com/Martina-LP">Martina</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
