import React, { useEffect, useState } from "react";
import Dot from "./Dot";
import Points from "./Points";
import Statistic from "./Statistic";
import Timer from "./Timer";

const Circle = () => {
  const [points, setPoints] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [dotInterval, setDotInterval] = useState();
  const [intervalValue, setIntervalValue] = useState(1500);
  const [flow, setFlow] = useState(0);
  const [missedValue, setMissedValue] = useState(0);
  const [gamePlayLvl, setGamePlayLvl] = useState("Beginner");
  const [gameFlowValue, setGameFlowValue] = useState();
  const [positionArr, setPositionArr] = useState([{
    posTop: 50,
    posLeft: 50,
    id: 1
  }])
  const [lastGameStatus, setLastGameStatus] = useState()

  
  const handleClick = (e) => {
    setPositionArr(positionArr.filter((item) => item.id != e.target.id))
    isMissed(e.target.classList);
    if (isStart) return;
    if(e.target.classList != "dot") return;
    setIsStart((prevState) => !prevState);
    setDotInterval(
      setInterval(() => {
        createDots();
      }, intervalValue)
    );
  };

  useEffect(() => {
    gameFlow(flow);
    console.log(lastGameStatus);
  }, [points, flow]);



  function gameOver(save) {
    setLastGameStatus({
      Score: points,
      Level: gamePlayLvl,
    })
    clearInterval(dotInterval)
    setIsStart(prevState => !prevState)
    setPositionArr([{
      posTop: 50,
      posLeft: 50,
      id: 1
    }])
    setGamePlayLvl("Begginer")
    setPoints(0)
    
  }


  

  function slowFlow(missClick) {
    const flowValue = [10, 40, 70, 90];
    let idx =
      flowValue.indexOf(missClick) > 0 && flowValue.indexOf(missClick) != -1
        ? flowValue.indexOf(missClick) - 1
        : 0;
    setFlow(flowValue[idx]);
    setPositionArr([{
      posTop: 50,
      posLeft: 50,
      id: 1
    }])
  }

  function gameFlow(value) {
    switch (true) {
      case value === 10:
        resetParam(1300);
        setGamePlayLvl("Noob");
        setGameFlowValue(16);
        return;
      case value === 40:
        resetParam(900);
        setGamePlayLvl("Semi");
        setGameFlowValue(32);
        return;
      case value === 70:
        resetParam(700);
        setGamePlayLvl("Pro");
        setGameFlowValue(48);
        return;
      case value === 90:
        resetParam(450);
        setGamePlayLvl("World elite");
        setGameFlowValue(64);
        return;
    }
  }

  function resetParam(interval) {
    clearInterval(dotInterval);
    setIsStart((prevState) => !prevState);
    setTimeout(() => {
      createDots();
    }, intervalValue - 250);
    setIntervalValue(interval);
  }

  function createDots() {
    let position = {
      posTop: Math.floor(Math.random() * (100 - 0 + 1)) + 0,
      posLeft: Math.floor(Math.random() * (100 - 0 + 1)) + 0,
      id: Math.floor(Math.random() * (10000000 - 0 + 1)) + 0
    }
    setPositionArr(prevState => [...prevState, position])
  }


  function isMissed(value) {
    if (value == "dot") {
      setPoints((prevState) => prevState + 1);
      setFlow((prevState) => (prevState <= 64 ? prevState + 1 : 65));
    } else {
      setPoints((prevState) => (prevState > 0 ? prevState - 1 : 0));
      setFlow((prevState) => (prevState > 0 ? prevState - 2 : 0));
      setMissedValue((prevState) => prevState + 1);
      if (missedValue > 5) {
        slowFlow(gameFlowValue);
        setMissedValue(0);
      }
    }
  }

  return (

    <section className="main-container">
      <div className="statistic-container">
        <Statistic lastGameStatus={lastGameStatus}/>
      </div>
      <div className="circle-container">
        <Points className="points" status={gamePlayLvl} points={points} />
        <div className="dart-container">
          <div onClick={(e) => handleClick(e)} className="dart">
            <div className="circle-dart">
              {positionArr.map(elem => <Dot key={elem.id} position={elem} />)}
            </div>
          </div>
        </div>
      </div>
      <Timer isStart={isStart} gameOver={gameOver} />
    </section>
  );
};

export default Circle;
