import css from "./CountOfTask.module.css";

const CountOfTask = () => {
  return (
    <div>
      <p className={css.task}>Active: 0</p>
      <p className={css.task}>Completed: 0</p>
    </div>
  );
};
export default CountOfTask;
