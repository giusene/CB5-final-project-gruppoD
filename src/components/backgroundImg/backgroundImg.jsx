import styles from "./styles.module.scss";
import first from "./backgrounds/first.webm";
import second from "./backgrounds/second.webm";
import third from "./backgrounds/third.webm";

export default function BackgroundImg({ backgroundControl }) {
  return (
    <>
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
    </>
  );
}
