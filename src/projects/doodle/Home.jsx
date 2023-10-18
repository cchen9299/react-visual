import video from "./video";
import YouTube from 'react-youtube'
import { useStore } from "./Store";

export default function Home({}){    
    return (
        <div
            id="homeContainer"
            style={{
                opacity:1,
                transition: '0.75s ease-in'
            }}
        >
            <div 
                style={{
                    height:'100vh',
                    width:'100vw',
                    position: 'absolute'
                }}
            />
            <YouTube 
                videoId="yIQd2Ya0Ziw"
                onReady={(e)=>e.target.playVideo()}
                opts={{
                    autoPlay:1,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                    }
                }}
            />
        </div>
    )
}