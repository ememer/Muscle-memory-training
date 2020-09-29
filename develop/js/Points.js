import React from "react";

const Points = (props) => {
  return (
    <h1 className="points">
      {props.points}/{Math.floor(props.points / 20) * 20 + 20}
    </h1>
  );
};

export default Points;
