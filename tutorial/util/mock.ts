import L, {LatLng} from "leaflet";

function getRandomInRange(_from: number, to: number, fixed?: number): number {
    return parseFloat((Math.random() * (to - _from) + _from).toFixed(fixed));
}
export interface ICctv{
    id: number
    date: string
    latLng: L.LatLng
}
export const createMockMarker = (): ICctv => ({
    id: new Date().getTime(),
    date: new Date(getRandomInRange(1609459200000, 1640995200000)).toISOString().slice(0, 16).replace('T', ' '),
    latLng: new LatLng(getRandomInRange(37.5, 37.6, 6),getRandomInRange(126.9, 127.1, 6))
})