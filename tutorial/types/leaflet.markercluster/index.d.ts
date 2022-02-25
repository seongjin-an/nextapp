import MarkerClusterGroup, {
    DivIcon,
    FeatureGroup,
    FitBoundsOptions,
    Icon,
    LatLngBounds, LatLngExpression,
    Layer,
    LayerGroup,
    LayerOptions,
    Marker,
    PolylineOptions
} from "leaflet";

export declare module 'leaflet'{
    export class MarkerClusterGroup extends FeatureGroup {
        constructor(options?: MarkerClusterGroupOptions);

        /*
        * Bulk methods for adding and removing markers and should be favoured over the
        * single versions when doing bulk addition/removal of markers.
        */
        addLayers(layers: Layer[], skipLayerAddEvent?: boolean): this;

        removeLayers(layers: Layer[]): this;

        clearLayers(): this;

        /*
        * If you have a marker in your MarkerClusterGroup and you want to get the visible
        * parent of it
        */
        getVisibleParent(marker: Marker): Marker;

        /*
        * If you have customized the clusters icon to use some data from the contained markers,
        * and later that data changes, use this method to force a refresh of the cluster icons.
        */
        refreshClusters(clusters?: Marker | Marker[] | LayerGroup | { [index: string]: Layer }): this;

        /*
        * Returns the total number of markers contained within that cluster.
        */
        getChildCount(): number;

        /*
        * Returns the array of total markers contained within that cluster.
        */
        getAllChildMarkers(): Marker[];

        /*
        * Returns true if the given layer (marker) is in the cluster.
        */
        hasLayer(layer: Layer): boolean;

        /*
        * Zooms to show the given marker (spiderfying if required),
        * calls the callback when the marker is visible on the map.
        */
        zoomToShowLayer(layer: Layer, callback?: () => void): void;

        options?: MarkerClusterGroupOptions;
    }
}