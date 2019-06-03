import React from "react";
// import cardData from "./cardData.js";

const PortCard = props => {
  // console.log(props.obj);
  return (
    <div className="flex-wrap p-4">
      <div
        className="card shadow rounded"
        style={{ width: "18rem", backgroundColor: "#849974", color: "white" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            <strong>{props.obj.title}</strong>
          </h5>
          <ul>
            <li>
              <strong>Skills: </strong>
              {props.obj.skills}
            </li>
            <li>
              <strong>Summary: </strong>
              {props.obj.summary}
            </li>
            <li>
              <strong>My Role: </strong>
              {props.obj.role}
            </li>
          </ul>
        </div>
        <a
          href={props.obj.githubLink}
          className="btn"
          style={{
            color: "#613A43",

            backgroundColor: "#E9DCC3"
          }}
        >
          Github Code
        </a>
      </div>
    </div>
  );
};

export default PortCard;
