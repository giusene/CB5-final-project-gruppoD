import { useState, useEffect } from "react";
import styles from "./leaderBoard.module.scss";
import { ref, onValue } from "firebase/database";
import { database } from "./../utils/firebase";
import { options } from "./../components/select/Select";
import first from "./backgrounds/first.gif";
import { AiTwotoneHome } from 'react-icons/ai';
import { useNavigate, Link } from "react-router-dom";

const LeaderBoard = ({}) => {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const scoresRef = ref(database, "scoreboard");

    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      const scoresList = [];

      for (let id in data) {
        scoresList.push({ id, ...data[id] });
      }

      setScores(scoresList);
    });
  }, []);

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <img src={first} className={styles.background} />
      <button className={styles.BtnHome} onClick={handleButtonClick}>
                <Link className={styles.link} to="/">
                  <AiTwotoneHome className={styles.icon}/> 
                </Link>
      </button>
      <h2>Leaderboard</h2>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => (
              <tr key={score.id}>
                <td>
                  <img src={score.avatar} alt={score.name} />
                  {console.log(score.name)}
                </td>
                <td>{score.name}</td>

                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
