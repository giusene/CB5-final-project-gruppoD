import { useContext, useState } from "react";
import SelectOptions from "../select/Select";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { ApplicationCtx } from "../../store";

const Login = (options) => {
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(ApplicationCtx);
  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    console.log("io");
    e.preventDefault();
    await dispatch({ type: "SET_USERNAME", payload: username });
    navigate("/gamePage");
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={onHandleSubmit}>
        <h2>Choose your Avatar</h2>
        <SelectOptions />

        <h2>Choose your NickName</h2>
        <input
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Enter your NickName..."
        />
        <input className={styles.BtnLogin} type="submit" value="Login" />
      </form>

      <p></p>
    </div>
  );
};

export default Login;
