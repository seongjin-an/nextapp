import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L, {DivIcon, Point, PointExpression} from "leaflet";
import styled from "styled-components";
import {renderToString} from "react-dom/server";

import "leaflet/dist/leaflet.css";
import FaMapMarkerAlt from 'react-icons/fa'

const StyledIcon = styled.img``
function getSearchIcon() {
    // 0 : A
    // const chr = String.fromCharCode(65 + i)
    const point: PointExpression = new Point(37.654324, 127.056374)
    const _html = renderToString(
        <StyledIcon
            src={'/images/location-pin.png'}
            style={{width: '50px', height: '50px', background: 'transparent'}}
        />)
    const icon = L.divIcon({
        // iconUrl: '/images/marker.png',
        // iconSize: point,
        // html: '<img src={FaMapMarkerAlt}/>',
        html: _html ,
        iconAnchor: [13, 32],
        popupAnchor: [0, -10],
        className: 'dummy'
    });
    return icon
}

const Map: React.FC = () => {
    // const [map, setMap] = useState()
    const center = new L.LatLng(37.654324, 127.056374)
    return (
        <div style={{width: '600px', height: '600px'}}>
            <MapContainer center={center} zoom={6} crs={L.CRS.EPSG3857}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} icon={getSearchIcon()}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map