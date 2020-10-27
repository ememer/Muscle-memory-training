import React from "react";

const Points = (props) => {
  return (
    <div>
      <h1 className={"points"}>{props.points}</h1>
      <p>{props.status.toUpperCase()}</p>
    </div>
  );
};

export default Points;
