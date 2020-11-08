import React, { useState } from "react";

const Statistic = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [gameStatistic, setGameStatistic] = useState([]);

  const handleToggleStats = () => {
    setIsVisible((visibleState) => !visibleState);
  };

  let gameStatus = new Promise((resolve, reject) => {
    props.lastGameStatus !== undefined
      ? resolve(props.lastGameStatus)
      : reject("waiting");
  });

  gameStatus.then(getUpdatedData).catch(DataNotUpdated);

  function getUpdatedData(response) {
    setGameStatistic((prevState) => [...prevState, response]);
    console.log(response);
  }

  function DataNotUpdated(response) {
    console.error(response);
  }

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
              {gameStatistic.map((items, idx) => (
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
