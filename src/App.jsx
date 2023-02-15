import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { database } from "./utils/firebase";
import { onValue, ref } from "firebase/database";
import HomeLayout from "./components/homeLayout/HomeLayout";

function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const starCountRef = ref(database);

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const { scoreboard } = data;

      console.log("SCOREBOARD: ", scoreboard);
    });

    const timer = setTimeout(() => {
      setShowModal(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.App}>
      {showModal && (
        <div className={styles.modal}>
          <img src="./../Quiz-zone_Logo_Finale.gif" />
        </div>
      )}
      <HomeLayout>
        <Hero />
        <Login />
        <Footer />
      </HomeLayout>
    </div>
  );
}

export default App;
