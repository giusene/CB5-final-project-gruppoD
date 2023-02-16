import { Outlet } from "react-router-dom";
import TimeBar from "../components/timeBar/TimeBar";
const GamePage = () => {
  return (
    <>
      <h1>CIAO A TUTTI, QUESTA SARA' LA PAGINA DI GIOCO</h1>
      <TimeBar />
      <Outlet />
    </>
  );
};
export default GamePage;
