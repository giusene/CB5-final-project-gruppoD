import { useContext, useState, useEffect } from "react";
import SelectOptions from "../select/Select";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { ApplicationCtx } from "../../store";

const Login = (options) => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(1);
  const { dispatch } = useContext(ApplicationCtx);
  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(avatar);
    await dispatch({
      type: "SET_USERNAME",
      payload: { username: username, avatar: avatar },
    });
    navigate("/gamePage");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("user");
    if (storedUsername) {
      const { username, avatar } = JSON.parse(storedUsername);
      setUsername(username);
    }
  }, []);

  return (
    <div className={styles.Login}>
      <form onSubmit={onHandleSubmit}>
        <h2>Choose your Avatar</h2>
        <SelectOptions setAvatar={setAvatar} />

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
