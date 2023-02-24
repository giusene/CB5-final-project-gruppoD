import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const TimeBar = () => {
  const [progress, setProgress] = useState(0);
  const [fillCount, setFillCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let timer = 0;
    intervalRef.current = setInterval(() => {
      if (timer >= 59) {
        timer = 0;
        setFillCount(fillCount + 1);
      } else {
        timer++;
      }
      setProgress(timer);
    }, 1000);
    if (fillCount >= 3) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const barWidth = `${(progress / 59) * 100}%`;
  const barColor =
    progress >= 55
      ? "rgb(255, 0, 0)"
      : progress >= 50
      ? "rgb(255, 106, 106)"
      : "rgb(134, 158, 228)";

  return (
    <div className={styles.container}>
      <div className={styles.TimeBar}>
        <div
          className={styles.wid}
          style={{ width: barWidth, backgroundColor: barColor }}
        />
      </div>
    </div>
  );
};

export default TimeBar;
