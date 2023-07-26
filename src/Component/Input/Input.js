import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Input.module.css";

function Input(props) {
  const [input, SetInput] = useState({
    id: Math.random(),
    username: "",
    age: "",
  });
  function usernameOnChangeHandler(event) {
    SetInput((prevInput) => {
      return { ...prevInput, username: event.target.value };
    });
  }

  function ageOnChangeHandler(event) {
    SetInput((prevInput) => {
      return { ...prevInput, age: event.target.value };
    });
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    props.dataPassingHandler(input);

    SetInput({
      id: Math.random(),
      username: "",
      age: "",
    });
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameOnChangeHandler}
          value={input.username}
        ></input>

        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageOnChangeHandler}
          value={input.age}
        ></input>

        <button type="submit">Add user</button>
      </form>
    </Card>
  );
}

export default Input;
