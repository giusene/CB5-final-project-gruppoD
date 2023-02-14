import React from "react";
import Select from "react-select";
import styles from "./styles.module.scss";
const options = [
  {
    value: "avatar1",
    label: "Avatar1",
    image: "https://picsum.photos/200/300",
  },
  {
    value: "avatar2",
    label: "Avatar2",
    image: "https://picsum.photos/200/300",
  },
  {
    value: "avatar3",
    label: "Avatar3",
    image: "https://picsum.photos/200/300",
  },
  {
    value: "avatar4",
    label: "Avatar4",
    image: "https://picsum.photos/200/300",
  },
  {
    value: "avatar5",
    label: "Avatar5",
    image: "https://picsum.photos/200/300",
  },
];

const SelectOptions = () => (
  <Select className={styles.Select} options={options} />
);
export default SelectOptions;
