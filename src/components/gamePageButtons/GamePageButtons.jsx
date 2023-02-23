import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyUser,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

function GamePageButtons({ navigate, text, refreshPage }) {
  return (
    <div className={styles.Buttons}>
      <button className={styles.BtnHome} onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouseChimneyUser} />
      </button>
      <h1 className={styles.Manche}>{text}</h1>
      <button className={styles.BtnRefresh} onClick={() => refreshPage()}>
        <FontAwesomeIcon icon={faRotate} />
      </button>
    </div>
  );
}

export default GamePageButtons;
