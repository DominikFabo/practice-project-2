import React, { useState } from "react";
import Input from "./Component/Input/Input";
import Output from "./Component/Output/Output";
import styles from "./error.module.css";

function App() {
  const [input, SetInput] = useState([]);

  const [errorModal, SetErrorModal] = useState(<div />);

  function inputDataHandler(props) {
    if (props.age.length === 0 && props.username.length === 0) {
      errorModalHandler(0);
    } else if (props.age.length === 0) {
      errorModalHandler(1);
    } else if (props.username.length === 0) {
      errorModalHandler(2);
    } else if (parseInt(props.age) < 0) {
      errorModalHandler(3);
    } else {
      SetInput((prevState) => {
        return [...prevState, props];
      });
    }
  }

  function deleteItemHandler(id) {
    SetInput((prevInput) => {
      const updatedInput = prevInput.filter((input) => input.id != id);
      return updatedInput;
    });
  }
  function errorModalHandler(props) {
    var text = "";
    switch (props) {
      case 0:
        text = "Username & age must not be empty";
        break;
      case 1:
        text = "age must not be empty";
        break;
      case 2:
        text = "Username must not be empty";
        break;
      case 3:
        text = "You must enter a valid age";
        break;
    }
    SetErrorModal(
      <div className={styles.error}>
        <h1>Invalid input</h1>
        <p>{text}</p>
        <button onClick={removeErrorHandler}>Okay</button>
      </div>
    );
  }
  function removeErrorHandler() {
    SetErrorModal(<div />);
  }
  return (
    <>
      <Input dataPassingHandler={inputDataHandler}></Input>
      {errorModal}
      <Output items={input} deleteHandler={deleteItemHandler}></Output>
    </>
  );
}

export default App;
