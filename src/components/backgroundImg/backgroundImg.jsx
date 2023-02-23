import styles from "./styles.module.scss";
import first from "./backgrounds/first.gif";
import second from "./backgrounds/second.gif";
import third from "./backgrounds/third.gif";

export default function BackgroundImg({ backgroundControl }) {
  return (
    <>
      <img
        src={first}
        className={`${styles.background} ${
          backgroundControl !== 0 && styles.noBackground
        }`}
      />

      <img
        src={second}
        className={`${styles.background} ${
          backgroundControl !== 1 && styles.noBackground
        }`}
      />
      <img
        src={third}
        className={`${styles.background} ${
          backgroundControl !== 2 && styles.noBackground
        }`}
      />
    </>
  );
}
