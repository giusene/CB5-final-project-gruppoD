import { useState, useEffect } from "react";
import styles from "./leaderBoard.module.scss";
import { ref, onValue } from "firebase/database";
import { database } from "./../utils/firebase";
import { options } from "./../components/select/Select";
import first from "./backgrounds/first.gif";

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);

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

  return (
    <div className={styles.container}>
      <img src={first} className={styles.background} />
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>

            <th>Totale Score</th>
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
  );
};

export default LeaderBoard;
