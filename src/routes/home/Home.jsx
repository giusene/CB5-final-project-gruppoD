import styles from "./styles.module.scss";
import Login from "../../components/login/Login";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { database } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";

import HomeLayout from "../../components/homeLayout/HomeLayout";
import { Outlet } from "react-router-dom";
import { ApplicationCtx } from "../../store";
import { useReducer, useState, useEffect } from "react";
import { initialState } from "../../store";
import { globalReducer } from "../../store/reducers";

export default function Home() {
  const [state, dispatch] = useReducer(globalReducer, initialState);
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
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.App}>
        {showModal && (
          <div className={styles.modal}>
            <img src="./../logo-iniziale.gif" />
          </div>
        )}
        <ApplicationCtx.Provider value={{ state, dispatch }}>
          <HomeLayout>
            <Hero />
            <Login />
            <Footer />
          </HomeLayout>
        </ApplicationCtx.Provider>
        <Outlet />
      </div>
    </>
  );
}
