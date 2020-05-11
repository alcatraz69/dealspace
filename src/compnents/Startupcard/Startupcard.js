import React from "react";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import styles from "./startupcard.module.css";

function Startupcard(props) {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="" />
      <div className={styles.card_details}>
        <h2>{props.name}</h2>
        <p className={styles.grey}>
          <i class="fa fa-eye" aria-hidden="true"></i> {props.views} views
        </p>
        <p>{props.description}</p>
        <div className={styles.icons}>
          <CheckCircleOutlineOutlinedIcon
            style={{ color: "green", marginRight: 10 }}
          />
          <FavoriteBorderOutlinedIcon
            style={{ color: "red", marginRight: 10 }}
          />
          <InsertDriveFileOutlinedIcon
            style={{ color: "lightblue", marginRight: 10 }}
          />
          <ShareOutlinedIcon
            style={{ color: "darkblue", fontSize: 23, marginRight: 10 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Startupcard;
