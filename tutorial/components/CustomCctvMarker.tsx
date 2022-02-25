import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import "leaflet.markercluster";
import L, {divIcon, point, MarkerCluster, MarkerClusterGroup, MarkerOptions} from 'leaflet'
import {createMockMarker, ICctv} from "../util/mock";
import styled from "styled-components";
import {renderToString} from "react-dom/server";
import {useMap} from "react-leaflet";

const cctvCluster = '/images/cctvCluster.png'
const StyledCctvClusterIcon = styled.div`
  background: url(${cctvCluster}) no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  display: flex;
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
const StyledCctvIcon = styled.div<{ icon: string }>`
  background: url(${cctv}) no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  display: flex;
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

interface IProps {
    cluster: MarkerClusterGroup | null;
    // setCluster: Dispatch<SetStateAction<MarkerClusterGroup>>
    setCluster: (cluster: MarkerClusterGroup) => void;
}

const CustomCctvMarker: React.FC<IProps> = ({cluster, setCluster}) => {
    const map = useMap()
    // const [cluster, setCluster] = useState<MarkerClusterGroup>()
    const cctvs: ICctv[] = Array(2000).fill(null).map((_, index) => ({...createMockMarker(), id: index}))
    const getCctvMarkerClusterIconCallback = useCallback((cluster: MarkerCluster) =>
            getCctvClusterMarker()
        , [])
    useEffect(() => {
        const markerClusterGroup = new MarkerClusterGroup({
            iconCreateFunction: getCctvMarkerClusterIconCallback,
            maxClusterRadius: 60,
            // zoomToBoundsOnClick: false,
            // clusterPane: 'cctv',
            // pane: 'cctv',
            // animate: true,
            // removeOutsideVisibleBounds: true,
            // spiderfyOnMaxZoom: false,
        })
        setCluster(markerClusterGroup)
    }, [])
    useEffect(() => {
        if(cluster){
            console.log('cluster:', cluster)
            // if(cluster.options){
            //     cluster.options.iconCreateFunction = getCctvMarkerClusterIconCallback
            // }
            cluster.addTo(map)
            // setCluster(cluster)
        }
    }, [cluster])
    useEffect(() => {
        if (cctvs && cluster) {
            const markers = cctvs.map((cctv, index) => {
                const marker = new L.Marker(cctv.latLng, {
                    icon: getCctvMarker(),
                })
                return marker
            })
            cluster.addLayers(markers)
        }
        return () => {
            cluster && cluster.clearLayers()
        }
    }, [cluster])
    return null
}

export default CustomCctvMarker