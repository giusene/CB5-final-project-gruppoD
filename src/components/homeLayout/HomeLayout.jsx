import styles from "./styles.module.scss";
import background from "./img/background.gif";
import avatar1 from "./img/avatar1.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import avatar4 from "./img/avatar4.png";
import { Outlet } from "react-router-dom";
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
    <>
      <div className={styles.Layout}>
        <img src={background} className={styles.background} />

        <div className={styles.images}>
          <div className={styles.avatar1}>
            <img className={styles.avatar1} src={avatar1} alt="avatar" />
            <img
              ref={eyeLeft}
              style={{
                top: 79,
                left: 59,
                width: 10,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
            <img
              ref={eyeLeft}
              style={{
                top: 93,
                left: 84,
                width: 10,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
          </div>
          <div className={styles.avatar3}>
            <img className={styles.avatar3} src={avatar3} alt="avatar" />
            <img
              ref={eyeLeft}
              style={{
                top: 152,
                left: 44,
                width: 16,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
            <img
              ref={eyeLeft}
              style={{
                top: 137,
                left: 81,
                width: 16,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
          </div>
          <div className={styles.avatar2}>
            <img className={styles.avatar2} src={avatar2} alt="avatar" />
            <img
              ref={eyeLeft}
              style={{
                top: 91,
                left: 59,
                width: 14,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
            <img
              ref={eyeLeft}
              style={{
                top: 77,
                left: 94,
                width: 14,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
          </div>
          <div className={styles.avatar4}>
            <img className={styles.avatar4} src={avatar4} alt="avatar" />
            <img
              ref={eyeLeft}
              style={{
                top: 134,
                left: 76,
                width: 14,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
            <img
              ref={eyeLeft}
              style={{
                top: 154,
                left: 110,
                width: 14,
                transform: `rotate(${calcAngle(eyeLeft)}deg)`,
              }}
              src={eye}
              className={styles.eye}
            />
          </div>
        </div>
        <div className={styles.Children}>{children}</div>
      </div>

      <Outlet />
    </>
  );
}
