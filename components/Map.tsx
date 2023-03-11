import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  searchResults: Array<string | number>;
};

const Map = ({ searchResults }: Props) => {
  const [selectedLocation, setSelectedLocation] = useState<object | any>({});

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
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
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
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="text-3xl cursor-pointer animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              longitude={result.long}
              latitude={result.lat}
              onClose={() => setSelectedLocation({})}
              closeOnClick={false} // -> true일 경우 popup 안뜸
            >
              {result.title}
              {console.log(result.title)}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
