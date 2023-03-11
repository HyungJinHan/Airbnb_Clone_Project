import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  searchResults: Array<string | number>;
};

const Map = ({ searchResults }: Props) => {
  const coordinates = searchResults.map((result: string | number | any) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const centerPoint: any = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: centerPoint.latitude,
    longitude: centerPoint.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/hhj1210/clf3ltof8002j01ti5trrrro3"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(nextViewport: any) => setViewport(nextViewport.viewport)}
      // onViewportChange={(nextViewport: any) => setViewport(nextViewport)} -> error
    >
      {searchResults.map((result: string | number | any) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            // offset={[-10, -10]}
          >
            <p className="text-2xl cursor-pointer animate-bounce">📍</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
