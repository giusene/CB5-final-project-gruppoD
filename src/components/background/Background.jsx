import styles from "./styles.module.scss";
import first from "./backgrounds/first.webm";
import second from "./backgrounds/second.webm";
import third from "./backgrounds/third.webm";
import { useState } from "react";

export default function Background() {
  const [backgroundControl, setBackgroundControl] = useState(0);
  return (
    <div>
      <button onClick={() => setBackgroundControl(0)}>0</button>
      <button onClick={() => setBackgroundControl(1)}> 1</button>
      <button onClick={() => setBackgroundControl(2)}>2</button>

      <video
        className={`${styles.background} ${
          backgroundControl !== 0 && styles.noBackground
        }`}
        autoPlay
        loop
        muted
      >
        <source src={first} type="video/mp4" />
      </video>

      <video
        className={`${styles.background} ${
          backgroundControl !== 1 && styles.noBackground
        }`}
        autoPlay
        loop
        muted
      >
        <source src={second} type="video/mp4" />
      </video>
      <video
        className={`${styles.background} ${
          backgroundControl !== 2 && styles.noBackground
        }`}
        autoPlay
        loop
        muted
      >
        <source src={third} type="video/mp4" />
      </video>
    </div>
  );
}
