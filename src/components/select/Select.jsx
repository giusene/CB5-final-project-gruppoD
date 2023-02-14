import styles from "./styles.module.scss";
import Select, { components } from "react-select";

const options = [
  {
    value: "antonella",
    title: "Captain Anto",
    image: (
      <div>
        <img src={"https://picsum.photos/200/300"} />
      </div>
    ),
  },
  {
    value: "carlotta",
    title: "Iron Carly",
    image: (
      <div>
        <img src={"https://picsum.photos/200/300"} />
      </div>
    ),
  },
  {
    value: "francesca",
    title: "",
    image: (
      <div>
        <img src={"https://picsum.photos/200/300"} />
      </div>
    ),
  },
];

const SingleValue = (props) => {
  const { title, image } = props.getValue()[0];

  return (
    <components.SingleValue {...props}>
      <span>{title}</span> <span>{image}</span>
    </components.SingleValue>
  );
};
const Option = (props) => {
  const { title, image } = props.data;

  return (
    <components.Option {...props}>
      <span>{title}</span> <span>{image}</span>
    </components.Option>
  );
};

export default function App() {
  return (
    <div className="App">
      <Select
        className={styles.Select}
        classNamePrefix="react-select"
        isSearchable={false}
        options={options}
        getOptionLabel={(options) => {
          return `${options.title} ${options.image}`;
        }}
        components={{ SingleValue, Option }}
      />
    </div>
  );
}
