import dayjs from 'dayjs';
import { useContext, useEffect, useRef, useState, createContext } from 'react';
import LocationMarker from '../components/game/LocationMarker';
import Ship from '../components/game/Ship';
import '../components/game/styles.css'
import Timer from '../components/game/Timer';

const getDiagonalDistance = (deltaX, deltaY) => {
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

const getCenterLocation = (objRef) => {
    return { x: objRef.width/2 + objRef.x, y: objRef.height/2 + objRef.y }
}

const getCenteredClickPosition = (objRef, destination, adjustment = 0) => {
    return { x: destination.x - objRef.width/2, y: destination.y - objRef.height/2 - adjustment }
}

const Context = createContext(null)

export default function game() {
    // game stuff
    const [hasPaused, setHasPaused] = useState(false)
    const pauseRef = useRef(false)
    const [remainingTime, setRemainingTime] = useState(0)

    // ship stuff
    const shipRef = useRef(null)
    const [shipLocation, setShipLocation] = useState({x:0, y:100})
    const [shipSpeed, setShipSpeed] = useState(100) // 50 px per sec
    const [travelDuration, setTravelDuration] = useState(0)
    const resumeDestination = useRef({x: 0, y: 100})

    // locator stuff
    const markerRef = useRef(null)
    const [markerPosition, setMarkerPosition] = useState({x: 0, y: 100})

    const registerClick = (e) => {
        if(!pauseRef.current){
            // move ship
            const currentShipRef = shipRef.current.getBoundingClientRect()
            const currentShipLocation = getCenterLocation(currentShipRef)
            const destination = { x: e.pageX, y: e.pageY}

            const deltaX = currentShipLocation.x - destination.x
            const deltaY = currentShipLocation.y - destination.y

            const travelDistance = getDiagonalDistance(deltaX, deltaY)
            const workingTravelDuration =  travelDistance / shipSpeed

            setTravelDuration(workingTravelDuration)
            setShipLocation(getCenteredClickPosition(currentShipRef, destination))
            resumeDestination.current = getCenteredClickPosition(currentShipRef, destination)

            // place locator
            const currentMarkerRef = markerRef.current.getBoundingClientRect()
            setMarkerPosition(getCenteredClickPosition(currentMarkerRef, destination, currentMarkerRef.height - 5))

            // handle timer
            setRemainingTime(Math.round(travelDuration * 100) / 100)
        }
    }

    const triggerPause = (e) => {
        if(!pauseRef.current){ // pause
            const currentShipRef = shipRef.current.getBoundingClientRect()
            pauseRef.current = true
            setShipLocation({x:currentShipRef.x, y:currentShipRef.y})
        } else{ // resume
            pauseRef.current = false
            setShipLocation(resumeDestination.current)
        }
    }

    useEffect(()=>{
        window.addEventListener('keypress', triggerPause)
        return () => window.addEventListener('keypress', triggerPause)
    }, [])

    return (
        <div 
            style={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column'}}
        >
            <navigation style={{height:100, zIndex: 10, backgroundColor:'white'}}>
                <button 
                    style={{width:200, height:50, position: 'absolute', right: 0}}
                    onClick={triggerPause}
                >
                    { pauseRef.current ? 'Resume' : 'Pause' }
                </button>
                <Timer 
                    remainingTime={remainingTime} 
                    hasPaused={pauseRef.current}
                />
            </navigation>

            <LocationMarker 
                markerRef={markerRef}
                markerPosition={markerPosition} 
            />

            <div 
                onClick={registerClick} 
                style={{backgroundColor: 'pink', width: '100%', height: '100%', position: 'fixed'}}
            >
                <Ship
                    shipRef={shipRef}
                    shipLocation={shipLocation}
                    travelDuration={travelDuration}
                />
            </div>
        </div>
    )
}