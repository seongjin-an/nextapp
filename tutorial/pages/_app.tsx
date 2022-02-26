import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {CctvClusterProvider} from "../contexts/CctvClusterContext";

function MyApp({Component, pageProps}: AppProps) {
    return <CctvClusterProvider>
        <Component {...pageProps} />
    </CctvClusterProvider>
}

export default MyApp
