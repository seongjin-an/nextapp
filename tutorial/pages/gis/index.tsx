import React from "react";
import Map from "../../components/Map";
import dynamic from "next/dynamic";
import styled from "styled-components";
const GisMap = dynamic(() => import("../../components/Map"), { ssr:false })

export default () => {
    return(
        <GisMap/>
    )
}
