import React from "react";
function Startupcard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="card_details">
        <h2>Startup Name</h2>
        <p className="grey">
          <i class="fa fa-eye" aria-hidden="true"></i> 234 views
        </p>
        <p>
          Startup description in one line so that users can quickly understand
          what the startup is about.
        </p>
        <div className="icons">
          <i class="fa fa-check-circle-o" aria-hidden="true"></i>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
          <i class="fa fa-file-o" aria-hidden="true"></i>
          <i class="fa fa-share-alt" aria-hidden="true"></i>
        </div>
      </div>
    </div>

    //      <div className="card" >
    //     <img src="#" alt="Alps">
    //     <div className="w3-container w3-center">
    //     <p>The Italian / Austrian Alps</p>
    //   </div>
  );
}

export default Startupcard;
