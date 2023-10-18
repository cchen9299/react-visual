import React from 'react'

export default function Ship({
    shipLocation, 
    travelDuration, 
    shipRef
}){

    return(
        <div
            ref={shipRef}
            id='ship'
            style={{ 
                width:100, 
                height:100, 
                backgroundColor: 'grey',
                position: 'relative',
                left: shipLocation.x,
                top: shipLocation.y,
                transitionDuration: `${travelDuration}s`,
                transitionTimingFunction: 'linear'
            }}
        >

        </div>
    )
}