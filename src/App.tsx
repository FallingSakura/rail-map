import Map, { NavigationControl, ScaleControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";

export default function App() {
  return (
    <Map
      initialViewState={{ longitude: 105, latitude: 35, zoom: 3.5 }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://tiles.openfreemap.org/styles/positron"
      workerUrl={maplibreWorkerUrl}
    >
      <NavigationControl position="top-right" />
      <ScaleControl />
    </Map>
  );
}
