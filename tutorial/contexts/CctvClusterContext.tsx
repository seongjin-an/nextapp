import React, {createContext, useState} from "react";
import L, {MarkerClusterGroup} from 'leaflet'

interface ICctvClusterState{
    cluster: MarkerClusterGroup | null;
}

interface ICctvClusterAction{
    setCluster: (cluster: MarkerClusterGroup) => void;
}

interface ICctvClusterContext{
    state: ICctvClusterState;
    action: ICctvClusterAction
}

const CctvClusterContext: React.Context<ICctvClusterContext> = createContext<ICctvClusterContext>({
    state: {cluster: null},
    action: {setCluster: () => {}}
})

const CctvClusterProvider: React.FC = ({children}) => {
    const [cluster, setCluster] = useState<MarkerClusterGroup|null>(null)
    const value = {
        state: {cluster},
        action: {setCluster}
    }
    return(
        <CctvClusterContext.Provider value={value}>{children}</CctvClusterContext.Provider>
    )
}

const {Consumer: CctvClusterConsumer} = CctvClusterContext
export {CctvClusterProvider, CctvClusterConsumer}
export default CctvClusterContext