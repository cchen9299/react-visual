import { useEffect, useState, useRef } from "react"
import { DOODLES_MAP, PROJECTS_MAP } from "./constants"

export default function Projects({}){
    const [pageOpacity, setPageOpacity] = useState(0)

    const [isUiToggled, setIsUiToggled] = useState(true)
    const [thumbnailPosition, setThumbnailPosition ] = useState(0)
    const mouseEvent = useRef({})

    const onTogglerClick = () => {
        if(isUiToggled){
            setThumbnailPosition(15)
        } else{
            setThumbnailPosition(0)
        }


        document.querySelectorAll(".parallax-element").forEach((shift) => {
            const isForeground = shift.getAttribute("data-toggled") === 'true' ? true : false

            if(!isForeground){
                shift.style.transform = `scale(1.5, 1.5) translateX(0px) translateY(0px)`;
            } 
            else {
                shift.style.transform = `scale(1, 1) translateX(0px) translateY(0px)`;
            }
        });

        setIsUiToggled(!isUiToggled)
    }


    const parallax = (event) => {
        mouseEvent.current = event
        // if(event.target.tagName !== 'BUTTON'){
            document.querySelectorAll(".parallax-element").forEach((shift) => {
                const isForeground = shift.getAttribute("data-toggled") === 'true' ? true : false
                const position = isForeground ? shift.getAttribute("value") : shift.getAttribute("value") / 10;
    
                const x = (window.innerWidth - event.pageX * position) / 90;
                const y = (window.innerHeight - event.pageY * position) / 90;
    
                if(isForeground){
                    shift.style.transform = `scale(1.5, 1.5) translateX(${x}px) translateY(${y}px)`;
                } 
                else {
                    shift.style.transform = `scale(1, 1) translateX(${x}px) translateY(${y}px)`;
                }
            });
        // }
    }

    useEffect(()=>{
        setPageOpacity(1)
        document.addEventListener("mousemove", parallax);
        return () => removeEventListener("mousemove", parallax)
    }, [])


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 'calc(100vw - 100px)',
            height: '100vh',
            transition: '0.75s ease-out',
            opacity: pageOpacity,
        }}>
            <button 
                onClick={onTogglerClick}
                style={{
                    display:'flex',
                    alignSelf:'flex-end',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                    <p>UIUX</p>
                    <div className="toggler-container">
                        <div 
                            id="toggler-thumbnail" 
                            className="toggler-thumbnail" 
                            style={{left: thumbnailPosition}}
                        />
                        <div className="toggler-track"/>
                    </div>
                    <p>Doodles</p>
            </button>
            <div class="parallax-container">
                <div style={{
                    position:'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}>
                    {Object.entries(PROJECTS_MAP).map(([name, {src, value, styles}], i)=>{
                        return (
                            <img 
                                value={value}
                                data-toggled={isUiToggled}
                                key={name}
                                className={'parallax-element'}
                                id={`parallax-${name}`}
                                src={src} 
                                style={{
                                    opacity: isUiToggled ? 1 : 0.2,
                                    marginTop:`${(i+1) * 9}vh`,
                                    transform:'scale(1.5, 1.5) translateX(0px) translateY(0px)',
                                    ...styles
                                }}
                            />
                        )
                    })}
                </div>
                <div style={{
                    position:'absolute',
                    height: '90%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    top:0
                }}>
                    {Object.entries(DOODLES_MAP).map(([name, {src, value, styles}], i)=>{
                        return (
                            <img 
                                value={value}
                                data-toggled={!isUiToggled}
                                key={name}
                                id={`parallax-${name}`} 
                                className={'parallax-element'}
                                src={src} 
                                style={{ 
                                    opacity: isUiToggled ? 0.2 : 1,
                                    marginTop: `${(i+1) * 7}vh`,
                                    transform:'scale(1, 1) translateX(0px) translateY(0px)',
                                    ...styles
                                }}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}