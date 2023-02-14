import { useState } from "react";
import SelectOptions from "../select/Select";
import styles from "./styles.module.scss";
import Select from "react-select";

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
        <img src={options.image} alt="immagineAvatar" />
        <h2>Choose your NickName</h2>
        <input
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username..."
        />
        <input className={styles.BtnLogin} type="submit" value="Login" />
      </form>

      <p></p>
    </div>
  );
};

export default Login;
