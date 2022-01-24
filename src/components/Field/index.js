import { useField } from "formik";
import styles from "./index.module.css";
const Field = (props) => {
  const [field, meta] = useField(props);


  return (
    <label className={styles.label}>
      {props.label}
      <input className={styles.textInput} type="text" {...field} />
    </label>
  );
};

export default Field;
