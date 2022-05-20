import styles from "./LinkShortener.module.css";
import { Button } from "../UI/Button";
import { Result } from "./Result";
import { useState } from "react";

const API_TOKEN = "91261efe9b5153e40fa092c0c94a5038db587db8";
const BASE_URL = "https://api-ssl.bitly.com/v4/shorten";

const LinkShortener = () => {
  const [link, setLink] = useState("");
  const [result, setResult] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setLink(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (link.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      const data = {
        long_url: link,
        domain: "bit.ly",
      };
      setLink("");

      try {
        fetch(BASE_URL, {
          method: "POST",
          headers: {
            Authorization: `${API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => setResult(data.link));
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <main>
      <header className={styles.header}>
        <h1 className={styles["link__title"]}>Shorten your link!</h1>
      </header>

      <section>
        <div className={styles.card}>
          <div className={styles["link__input"]}>
            <label className={styles["link__input-label"]}>
              Pass your link
            </label>
            <input
              className={`${styles["link__input-field"]} ${
                !isValid && styles.invalid
              }`}
              type="text"
              onChange={inputHandler}
              value={link}
              placeholder="https://www.google.com"
            />
            {!isValid && (
              <p className={styles["link__error-msg"]}>
                The input can't be blank!
              </p>
            )}
          </div>
          <div className={styles["link__actions"]}>
            <Button getLink={submitHandler}>Submit</Button>
          </div>
          {result ? <Result href={result}>{result}</Result> : ""}
        </div>
      </section>
    </main>
  );
};

export default LinkShortener;
