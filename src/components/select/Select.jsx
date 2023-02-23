import { useState } from "react";
import styles from "./styles.module.scss";

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
];

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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
              key={option.value}
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