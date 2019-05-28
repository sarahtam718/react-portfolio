import React from "react";
// import cardData from "./cardData.js";

const PortCard = props => {
  console.log(props.obj);
  return (
    // <div className="img-container"><img alt="SpongBob" src="{props.obj.img}"/>
    // </div>
    <div
      className="card shadow"
      style={{ padding: 20, margin: 20, border: "1px black solid" }}
    >
      <h3>
        <strong>{props.obj.title}</strong>
      </h3>
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
      <a href={props.obj.githubLink} class="btn btn-info">
        Github Code
      </a>
    </div>
  );
};

//
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img
//           alt="SpongeBob"
//           src={props.obj.image}
//         />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.obj.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.obj.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.obj.location}
//           </li>
//         </ul>
//       </div>
//     </div>

export default PortCard;
