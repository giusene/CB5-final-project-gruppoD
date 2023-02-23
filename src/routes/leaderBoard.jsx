import { useState, useEffect } from "react";
import styles from "./leaderBoard.module.scss";
import { ref, onValue } from "firebase/database";
import { database } from "./../utils/firebase";
import { options } from './../components/select/Select';

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
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>First Manche</th>
            <th>Second Manche</th>
            <th>Third Manche</th>
            <th>Totale Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => (
            <tr key={score.id}>
              <td>
                <img src={options.find((option) => option.avatar === score.avatar).image} alt={score.name} />
              </td>
              <td>{score.name}</td>
              <td>{score.m1}</td>
              <td>{score.m2}</td>
              <td>{score.m3}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
