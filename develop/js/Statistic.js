import React, {useState} from "react";

const Statistic = () => {
  const dataFromStorage = JSON.parse(localStorage.getItem("statistic"))
  const [isVisible, setIsVisible] = useState(false)
  const [statisticArray, setStatisticArray] = useState([{
    Score: null,
    Time: null,
    Miss: null,
  }]);
  
  const handleToggleStats = () => {
    setIsVisible(visibleState => !visibleState)
    
  };


  return (
     <>
     <button className={"btn_stats"} onClick={handleToggleStats}>STATS</button>
    <div className={"list_container"}>
     {isVisible ? (<table>
       <thead>
         <tr>
          <th>Score</th>
          <th>Time</th>
          <th>Miss</th>
         </tr>
       </thead>
       <tbody>
       {statisticArray.map((items,idx)=><tr key={idx}>
         <td>{items.Score}</td>
         <td>{items.Time}</td>
         <td>{items.Miss}</td>
         </tr>)}
       </tbody>
     </table>) : null }
    </div>
    </>
  );
};

export default Statistic;
