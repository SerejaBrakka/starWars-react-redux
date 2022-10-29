import React from "react";
import classes from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div>
      <p className={classes.errorMessage}>
        Извини, не удалось получить данные, <br />
        Ну ты это .... заходи попозже, <br />
        Мы будем ждать тебя!
      </p>
    </div>
  );
};

export default ErrorMessage;
