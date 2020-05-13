import React from "react";
import styles from "./form.module.css";
import Dropdown from "../dropdown/dropdown";

function Form() {
  return (
    <div className={styles.section_container}>
      <h3 className={styles.sec_title}>Build Your Custom Startup Watch List</h3>
      <div className={styles.form_sec}>
        <table>
          <tr>
            <td>Card Title</td>
            <td>
              <input
                className={styles.input1}
                type="text"
                placeholder="text"
              ></input>
            </td>
          </tr>
          <tr>
            <th>Filter Companies by :</th>
          </tr>
          <tr>
            <td>Sector</td>
            <td>
              <Dropdown />
            </td>
          </tr>
          <tr>
            <td>Industry</td>
            <td>
              <Dropdown />
            </td>
          </tr>
          <tr>
            <td>Categories</td>
            <td>
              <Dropdown />
            </td>
          </tr>
          <tr>
            <td>Tags</td>
            <td>
              <Dropdown />
            </td>
          </tr>
        </table>
        <div>
          <p className={styles.switch_txt}>Show 1-min Video Startup Pitches</p>
          <label className={styles.switch}>
            <input type="checkbox"></input>
            <span className={styles.slider}></span>
          </label>
        </div>
        <button className={styles.submit}>submit</button>
      </div>
    </div>
  );
}

export default Form;
