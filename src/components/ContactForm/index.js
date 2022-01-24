import { Form, Formik } from "formik";
import Field from "../Field";
import styles from "./index.module.css"

const initialValues = { firstname: "", lastname: "", email: "", message: "" };
const ContactForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.form}>
         <Field label="Nombres" name="firstname"/>
         <Field label="Apellidos" name="lastname"/>
         <Field label="Correo electrónico" name="email"/>
         <Field label="Mensaje" name="message"/>
         <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
