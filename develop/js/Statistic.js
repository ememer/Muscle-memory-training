import React, {useEffect, useState} from "react";

const Statistic = () => {
  const dataFromStorage = JSON.parse(localStorage.getItem("statistic"))
  const [isVisible, setIsVisible] = useState(false)
  const [statisticArray, setStatisticArray] = useState(dataFromStorage)
  const [test, setTest]= useState()

  const handleToggleStats = () => {
    setIsVisible(visibleState => !visibleState)
    setStatisticArray(prevState=>{
    });
  }

  useEffect(()=>{

  },[statisticArray])

  

  return (
     <>
     <button className={"btn_stats"} onClick={handleToggleStats}>STATS</button>
    <div className={"list_container"}>
     {/* {isVisible ? (<ul>
        {statisticArray.map((items, idx) => <li key={idx}>{items}</li>)}
      </ul>) : null } */}
    </div>
    </>
  );
};

export default Statistic;
