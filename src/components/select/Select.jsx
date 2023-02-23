import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { ApplicationCtx } from "../../store";

export const options = [
  {
    avatar: 1,
    value: "antonella",
    title: "Captain Anto",
    image: "./antonella.png",
  },
  {
    avatar: 2,
    value: "carlotta",
    title: "Iron Carly",
    image: "./carlotta.png",
  },
  {
    avatar: 3,
    value: "francesca",
    title: "Fantastic Fra",
    image: "./francesca.png",
  },
  {
    avatar: 4,
    value: "martina",
    title: "Wonder Marty",
    image: "./martina.png",
  },
  {
    avatar: 5,
    value: "davin",
    title: "Hulk Davy",
    image: "./davin.png",
  },
  {
    avatar: 6,
    value: "senex",
    title: "Evil Senex",
    image: "./senex.png",
  },
];

export default function Select({ setAvatar }) {
  const { dispatch } = useContext(ApplicationCtx);
  /*const [avatarId, setAvatar] = useState("");*/
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = async (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setAvatar(option.image);
    /*await dispatch({ type: "SET_AVATAR", payload: option.id });*/
  };

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("user");
    if (getLocalStorage) {
      const { avatar } = JSON.parse(getLocalStorage);
      const getAvatar = options.filter((item) => item.image === avatar);
      setSelectedOption(getAvatar[0]);
    }
  }, []);

  return (
    <div className={styles.Select}>
      <div onClick={handleToggle} className={styles.SelectedOption}>
        {selectedOption ? (
          <>
            <span>{selectedOption.title}</span>
            <img src={selectedOption.image} alt={selectedOption.title} />
          </>
        ) : (
          "Select your Avatar. . ."
        )}
      </div>
      {isOpen && (
        <div className={styles.Options}>
          {options.map((option) => (
            <div
              value={option.id}
              // onChange={(option) => setAvatar(option.target.value)}
              key={option.id}
              onClick={() => handleSelectOption(option)}
              className={styles.Option}
            >
              <span>{option.title}</span>
              <img src={option.image} alt={option.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
