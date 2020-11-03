import React, {useEffect, useState} from "react";

const Statistic = (props) => {
  
  const [isVisible, setIsVisible] = useState(false)
  const [statisticArray, setStatisticArray] = useState([{
    Score: null,
    Level: null,
  }]);
  
  
  
  const handleToggleStats = () => {
    setIsVisible(visibleState => !visibleState)
  };
  
  useEffect(()=>{
    // setStatisticArray(prevArr => [...prevArr,props.lastGameStatus])
    console.log(props.lastGameStatus);
  },[statisticArray])
  
  return (
     <>
     <button className={"btn-stats"} onClick={handleToggleStats}>STATS</button>
    <div className={"list-container"}>
     {isVisible ? (<table>
       <thead>
         <tr>
          <th>Score</th>
          <th>Level</th>
          </tr>
       </thead>
       <tbody>
       {statisticArray.map((items,idx)=><tr key={idx}>
         <td>{items.Score}</td>
         <td>{items.Level}</td>
       </tr>)}
       </tbody>
     </table>) : null }
    </div>
    </>
  );
};

export default Statistic;
