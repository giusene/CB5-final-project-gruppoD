import React from "react";
import styles from "./styles.module.scss";
import github from "./github.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h1>Creators:</h1>
      <ul>
        <li>
          <a>Antonella</a>
          <img src="./antonella.png" />
          <a href="https://github.com/AntonellaSchillaci">
            <img src={github} />
          </a>
        </li>
        <li>
          <a href="https://github.com/CarlottaKiri">Carlotta</a>
          <img src="./carlotta.png" />
          <a href="https://github.com/CarlottaKiri">
            <img src={github} />
          </a>
        </li>
        <li>
          <a href="https://github.com/DavinGarozzo">Davin</a>
          <img src="./davin.png" />
        </li>
        <li>
          <a href="https://github.com/IFranc3sca">Francesca</a>
          <img src="./francesca.png" />
        </li>
        <li>
          <a href="https://github.com/Martina-LP">Martina</a>
          <img src="./martina.png" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
