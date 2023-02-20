import { useState } from "react";
import SelectOptions from "../select/Select";
import styles from "./styles.module.scss";
import Select from "react-select";
import { Link } from "react-router-dom";

const Login = (options) => {
  const [username, setUsername] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={onHandleSubmit}>
        <h2> Choose your Avatar</h2>
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
        <Link to={"/gamePage"}>
          <input className={styles.BtnLogin} type="submit" value="Login" />
        </Link>
      </form>

      <p></p>
    </div>
  );
};

export default Login;
