import React from "react";

const PortCard = props => {
  // console.log(props.obj);
  return (
    <div className="p-4">
      <div
        className="card shadow rounded"
        style={{ width: "25rem", backgroundColor: "#849974", color: "white" }}
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
            <br />
            <li>
              <strong>Summary: </strong>
              {props.obj.summary}
            </li>
            <br />
            <li>
              <strong>My Role: </strong>
              {props.obj.role}
            </li>
          </ul>
        </div>
        <div style={{ display: "flex" }}>
          <a
            href={props.obj.githubLink}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#613A43",
              color: "white",
              height: 40,
              width: 150,
              margin: "auto",
              marginBottom: 20,
              letterSpacing: 0.5
            }}
          >
            Github Code
          </a>
          <a
            href={props.obj.deployedLink}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#613A43",
              color: "white",
              height: 40,
              width: 150,
              margin: "auto",
              marginBottom: 20,
              letterSpacing: 0.5
            }}
          >
            Deployed Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortCard;
