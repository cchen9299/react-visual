import { useEffect, useState } from "react"

export default function Timer({remainingTime, hasPaused}){

    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         console.log('fire')
    //         setRemainingTime(remainingTime-0.01)
    //     }, 10)

    //     return timer
    // }, [])

    return (
        <div>
            {remainingTime}
        </div>
    )
}