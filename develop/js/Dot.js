import React from "react"

const Dot = (props) =>{
      return(
        <button className="dot" id={`${props.position.id}`} style={{top: `${props.position.posTop}%`,left: `${props.position.posLeft}%`}} ></button>
    )
}

export default Dot