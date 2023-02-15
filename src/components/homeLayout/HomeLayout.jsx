import styles from "./styles.module.scss";
import background from "./img/background.webm";
import avatar1 from "./img/avatar1.png";
import avatar2 from "./img/avatar2.png";

import eye from "./img/eye.png";

import { useState, useEffect, useRef } from "react";
export default function HomeLayout({ children }) {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const eyeLeft = useRef();

  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + -18;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.Layout}>
      {children}
      <video className={styles.background} autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      {/* <div className={styles.images}>
        <img className={styles.avatar1} src={avatar1} alt="avatar" />
        <img className={styles.avatar2} src={avatar2} alt="avatar" />

        <div className={styles.eyes}>
          <img
            ref={eyeLeft}
            style={{
              top: 259,
              left: 60,
              transform: `rotate(${calcAngle(eyeLeft)}deg)`,
            }}
            src={eye}
            className={styles.eye}
          />
          <img
            ref={eyeLeft}
            style={{
              top: 273,
              left: 83,
              transform: `rotate(${calcAngle(eyeLeft)}deg)`,
            }}
            src={eye}
            className={styles.eye}
          />
          <img
            ref={eyeLeft}
            style={{
              top: 121,
              left: 333,
              width: 14,
              transform: `rotate(${calcAngle(eyeLeft)}deg)`,
            }}
            src={eye}
            className={styles.eye}
          />
          <img
            ref={eyeLeft}
            style={{
              top: 108,
              left: 370,
              width: 14,
              transform: `rotate(${calcAngle(eyeLeft)}deg)`,
            }}
            src={eye}
            className={styles.eye}
          />
        </div>
      </div>
      <img /> */}
    </div>
  );
}
