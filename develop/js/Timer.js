import React, { useEffect, useState } from "react"

const Timer = (props) =>{
    const [time, setTime] = useState(5)
    const [lockInterval, setLockInterval] = useState(false)
    const [timerInterval, setTimerInterval] = useState()
    const [isCountDownDone, setIsCountDownDone] = useState(false)
    
    if(!lockInterval){
        if(props.isStart){
            setTimerInterval(setInterval(()=>{
                setTime(prevTime => prevTime - 1)  
            },1000))
            setLockInterval(prevState => !prevState)
        }
    }
    
    useEffect(()=>{
        if(time < 0){
            clearInterval(timerInterval)
            setTime(5)
            props.gameOver(isCountDownDone)
            setLockInterval(prevState => !prevState)
        }
    },[time])
   
    
    return(
        <section>
            <h1>{time}s</h1>
        </section>
    )
}

export default Timer