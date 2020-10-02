import React, { useEffect, useState } from "react";
import Points from "./Points";

const Circle = () => {
  const [points, setPoints] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [dotInterval, setDotInterval] = useState();
  const [intervalValue, setIntervalValue] = useState(1500);
  const [flow, setFlow] = useState(0);
  const [missedValue, setMissedValue] = useState(0);
  const [gamePlayLvl, setGamePlayLvl] = useState("Beginner");

  const handleClick = (e) => {
    e.target.classList == "targetElem" ? e.target.remove() : null;
    isMissed(e.target.classList);
    if (isStart) return;
    setIsStart((prevState) => !prevState);
    setDotInterval(
      setInterval(() => {
        createDots();
      }, intervalValue)
    );
  };

  useEffect(() => {
    gameFlow(flow);
  }, [points, flow]);

  function gameFlow(value) {
    switch (true) {
      case value === 16:
        setIsStart((prevState) => !prevState);
        clearInterval(dotInterval);
        setGamePlayLvl("Noob");
        setTimeout(() => {
          createDots();
        }, intervalValue - 350);
        setIntervalValue((prevValue) => Math.floor(prevValue / 1.05));
        return;
      case value === 32:
        setIsStart((prevState) => !prevState);
        clearInterval(dotInterval);
        setGamePlayLvl("Semi");
        setTimeout(() => {
          createDots();
        }, intervalValue - 350);
        setIntervalValue((prevValue) => Math.floor(prevValue / 1.4));
        console.log("switch 2");
        return;
      case value === 48:
        setIsStart((prevState) => !prevState);
        clearInterval(dotInterval);
        setGamePlayLvl("Pro");
        setTimeout(() => {
          createDots();
        }, intervalValue - 350);
        setIntervalValue((prevValue) => Math.floor(prevValue / 1.6));
        console.log("switch 3");
        return;
      case value === 64:
        setIsStart((prevState) => !prevState);
        clearInterval(dotInterval);
        setGamePlayLvl("World elite");
        setTimeout(() => {
          createDots();
        }, intervalValue - 350);
        setIntervalValue(650);
        console.log("switch 2");
        return;
    }
  }

  function createDots() {
    let posTop = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    let posLeft = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const dart = document.querySelector(".circle_dart");
    const target = document.createElement("button");
    dart.appendChild(target);
    target.classList.add("targetElem");
    target.style.top = `${posTop}%`;
    target.style.left = `${posLeft}%`;
  }

  function isMissed(value) {
    if (value == "targetElem") {
      setPoints((prevState) => prevState + 1);
      setFlow((prevState) => (prevState <= 64 ? prevState + 1 : 67));
    } else {
      setPoints((prevState) => (prevState > 0 ? prevState - 1 : 0));
      setFlow((prevState) => (prevState > 0 ? prevState - 2 : 0));
      setMissedValue((prevState) => prevState + 1);
    }
  }

  return (
    <>
      <Points status={gamePlayLvl} points={points} />
      <section>
        <div onClick={(e) => handleClick(e)} className="container">
          <div className="circle_dart">
            <button className="targetElem"></button>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Circle;
