import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const TimeBar = () => {
  const [progress, setProgress] = useState(0);
  const [fillCount, setFillCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 59) {
          clearInterval(intervalRef.current);
          console.log(fillCount);
          if (fillCount < 2) {
            setProgress(0);
          }
          setFillCount((prevCount) => prevCount + 1);
        }
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [fillCount]);

  useEffect(() => {
    if (fillCount >= 3) {
      clearInterval(intervalRef.current);
    }
  }, [fillCount]);

  const barWidth = ` ${(progress / 59) * 100}%`;
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
