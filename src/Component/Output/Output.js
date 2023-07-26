import React from "react";
import Card from "../UI/Card";
import styles from "./Output.module.css";

function Output(props) {
    function deleteItemHandler(event){
        props.deleteHandler(event.target.id);
    }

    if (props.items.length === 0) {
        return <div />;
      }
  return (
    <Card>
      <div className={styles.content}>
        {props.items.map((i) => {
          return (
            <div key={i.id} className={styles.output} onClick={deleteItemHandler}> 
              <h1 id={i.id}>
                {i.username} ({i.age} years old)
              </h1>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default Output;
