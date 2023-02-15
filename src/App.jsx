import { useEffect } from "react";
import styles from "./App.module.scss";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { database } from "./utils/firebase";
import { onValue, ref } from "firebase/database";
import HomeLayout from "./components/homeLayout/HomeLayout";

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
      <HomeLayout>
        <Hero />
        <Login />
        <Footer />
      </HomeLayout>
    </div>
  );
}

export default App;
