import React, { useState } from "react";

const Statistic = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleStats = () => {
    setIsVisible((visibleState) => !visibleState);
  };

  return (
    <>
      <button className={"btn-stats"} onClick={handleToggleStats}>
        STATS
      </button>
      <div className={"list-container"}>
        {isVisible ? (
          <table>
            <thead>
              <tr>
                <th>Score</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {props.lastGameStatus.map((items, idx) => (
                <tr key={idx}>
                  <td>{items.score}</td>
                  <td>{items.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </>
  );
};

export default Statistic;
