import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";

import { database } from "./utils/firebase";
import { onValue, ref } from "firebase/database";

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
      <h1>CIAO A TUTTI</h1>
      <Footer />
    </div>
  );
}

export default App;
