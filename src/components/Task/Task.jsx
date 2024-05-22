import { Formik, Field, Form } from "formik";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

const Task = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <Formik>
        <Form className={css.Form}>
          <Field
            className={css.checkbox}
            checked={task.completed}
            as="checkbox"
          />
        </Form>
      </Formik>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose className={css.icon} size={24} />
      </button>
    </div>
  );
};
export default Task;
