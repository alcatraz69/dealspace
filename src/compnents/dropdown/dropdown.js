import React from "react";
import styles from "./dropdown.module.css";

function dropdown() {
  return (
    <div>
      <select className={styles.myList}>
        <option value="" disabled selected hidden>
          Multiple Choice
        </option>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
        <option value="4">four</option>
      </select>
    </div>
  );
}

export default dropdown;
