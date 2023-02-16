import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const TimeBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  let barColor;
  if (progress >= 25) {
    barColor = 'rgb(255, 0, 0)'; 
  } else if (progress >= 20) {
    barColor = 'rgb(255, 106, 106)'; 
  } else {
    barColor = 'rgb(134, 158, 228)'; 
  }

  const barWidth = `${(progress / 30) * 100}%`;

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

