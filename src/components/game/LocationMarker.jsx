export default function LocationMarker({
    markerPosition,
    markerRef
}){

    return(
        <div 
            ref={markerRef}
            style={{
                position: 'absolute',
                top: markerPosition.y,
                left: markerPosition.x,
                width: 0, 
                height: 0,
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderTop: '20px solid #f00',
                zIndex: 11,
            }}
        >

        </div>
    )
}