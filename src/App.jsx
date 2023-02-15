import { useEffect, useState } from "react";
import styles from "./App.module.scss";

import { database } from "./utils/firebase";
import { onValue, ref } from "firebase/database";

import Hero from './components/hero/Hero';

function App() {
  useEffect(() => {
    const starCountRef = ref(database);

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const { scoreboard } = data;

      console.log("SCOREBOARD: ", scoreboard);
    });
  }, []);

  return (
    <div className={styles.App}>
     
    </div>
  );
}

export default App;
