import React from "react";
import styles from "./styles.module.scss";
import github from "./github.png";
import linkedin from "./linkedin.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h1>Software Developers:</h1>
      <ul>
        <li>
          <a>Antonella</a>
          <img src="./antonella.png" />
          <div className={styles.buttons}>
            <a target="_blank" href="https://github.com/AntonellaSchillaci">
              <img src={github} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/antonella-schillaci-frontend-dev/"
            >
              <img src={linkedin} />
            </a>
          </div>
        </li>
        <li>
          <a>Carlotta</a>
          <img src="./carlotta.png" />
          <div className={styles.buttons}>
            <a href="https://github.com/CarlottaKiri" target="_blank">
              <img src={github} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/carlottakiri/">
              <img src={linkedin} />
            </a>
          </div>
        </li>
        <li>
          <a>Davin</a>
          <img src="./davin.png" />

          <div className={styles.buttons}>
            <a target="_blank" href="https://github.com/DavinGarozzo">
              <img src={github} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/salvatore-davin-garozzo/"
            >
              <img src={linkedin} />
            </a>
          </div>
        </li>
        <li>
          <a>Francesca</a>
          <img src="./francesca.png" />
          <div className={styles.buttons}>
            <a target="_blank" href="https://github.com/IFranc3sca">
              <img src={github} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/francesca-leonardi-919450266/"
            >
              <img src={linkedin} />
            </a>
          </div>
        </li>
        <li>
          <a>Martina</a>
          <img src="./martina.png" />
          <div className={styles.buttons}>
            <a target="_blank" href="https://github.com/Martina-LP">
              <img src={github} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/martinalaporta/"
            >
              <img src={linkedin} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
