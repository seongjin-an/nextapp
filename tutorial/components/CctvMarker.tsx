import React from "react";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {Marker} from "react-leaflet";
import L, {divIcon, point} from 'leaflet'
import {createMockMarker, ICctv} from "../util/mock";
import styled from "styled-components";
import {renderToString} from "react-dom/server";

const cctvCluster = '/images/cctvCluster.png'
const StyledCctvClusterIcon = styled.div`
  background: url(${cctvCluster}) no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  display:flex;
  justify-content: center;
  align-items: center;
`
const getCctvClusterMarker = () => {
    const html = renderToString(
        <StyledCctvClusterIcon/>
    )
    return divIcon({
        html,
        iconSize: point(49, 53, true),
        iconAnchor: [21, 43],
        className: 'dummy3'
    })
}
const cctv = '/images/cctv2.png'
const StyledCctvIcon = styled.div<{icon: string}>`
  background: url(${cctv}) no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  display:flex;
  justify-content: center;
  align-items: center;
`
const getCctvMarker = () => {
    const html = renderToString(
        <StyledCctvIcon icon='/images/cctv.png'/>
    )
    return divIcon({
        html: html,
        //iconSize: point(43, 47, true),
        // iconAnchor: [21, 44],
        iconSize: point(49, 53, true),
        iconAnchor: [21, 43],
        className: 'dummy2'
    })

}

const CctvMarker: React.FC = () => {
    const cctvs: ICctv[] = Array(2000).fill(null).map((_, index) => ({ ...createMockMarker(), id: index }))
    console.log('cctvs:', cctvs)
    return(
        <MarkerClusterGroup
            maxClusterRadius={60}
            iconCreateFunction={getCctvClusterMarker}
        >
            {
                cctvs.map((cctv, index) => (
                    <Marker key={index} position={cctv.latLng} icon={getCctvMarker()}/>
                ))
            }
        </MarkerClusterGroup>
    )
}

export default CctvMarker