import React, {useEffect, useState} from "react";

const Statistic = (props) => {
  
  const [isVisible, setIsVisible] = useState(false)
  const [statisticArray, setStatisticArray] = useState([{
    Score: null,
    Time: null,
  }]);
  
  
  
  const handleToggleStats = () => {
    setIsVisible(visibleState => !visibleState)
  };
  

 
  return (
     <>
     <button className={"btn-stats"} onClick={handleToggleStats}>STATS</button>
    <div className={"list-container"}>
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
       </tr>)}
       </tbody>
     </table>) : null }
    </div>
    </>
  );
};

export default Statistic;
