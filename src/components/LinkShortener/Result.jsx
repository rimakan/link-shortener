import styles from "./Result.module.css";

export const Result = (props) => {
  return (
    <div className={styles['link__result']}>
      <a href={props.children} className={styles["link__shortened-link"]}>
        {props.children}
      </a>
    </div>
  );
};
