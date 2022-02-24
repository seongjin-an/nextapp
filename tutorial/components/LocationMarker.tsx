import React, {useState} from "react";
import {useMapEvents, Marker, Popup} from "react-leaflet";
import L, {LatLng, LatLngExpression} from 'leaflet'

const LocationMarker = () => {
    const [position, setPosition] = useState<L.LatLng>(new LatLng(0,0))
    const map = useMapEvents({
        click(e) {
            console.log('click e:', e)
            // map.locate()
            map.flyTo(e.latlng)
        },
        moveend(e){
            console.log('move end e:', e.target.getCenter())
        },
        locationfound(e) {
            console.log('locationEvent:', e)
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
export default LocationMarker