import { useState } from "react";
import styles from "./styles.module.scss";

const options = [
  {
    value: "antonella",
    title: "Captain Anto",
    image: "https://picsum.photos/200/300?1",
  },
  {
    value: "carlotta",
    title: "Iron Carly",
    image: "https://picsum.photos/200/300?2",
  },
  {
    value: "francesca",
    title: "Fantastic Fra",
    image: "https://picsum.photos/200/300?3",
  },
  {
    value: "martina",
    title: "Wonder Marty",
    image: "https://picsum.photos/200/300?4",
  },
  {
    value: "davin",
    title: "Hulk Davy",
    image: "https://picsum.photos/200/300?5",
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
          "Select..."
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
