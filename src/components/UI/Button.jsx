import styles from './Button.module.css';

export const Button = (props) => {
  return (
    <button
      className={styles['link__btn']}
      type="submit"
      onClick={props.getLink}
    >
      {props.children}
    </button>
  );
};
