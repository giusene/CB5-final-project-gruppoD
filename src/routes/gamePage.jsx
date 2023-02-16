import { Outlet } from "react-router-dom";
const GamePage = () => {
  return (
    <>
      <h1>CIAO A TUTTI, QUESTA SARA' LA PAGINA DI GIOCO</h1>
      <Outlet />
    </>
  );
};
export default GamePage;
