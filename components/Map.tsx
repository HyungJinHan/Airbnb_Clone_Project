import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

type Props = {};

const Map = (props: Props) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: -122.4376,
    latitude: 37.7577,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/hhj1210/clf3ltof8002j01ti5trrrro3"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    />
  );
};

export default Map;
