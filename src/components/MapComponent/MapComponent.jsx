import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import styles from "./MapComponent.module.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function MapComponent() {
  const position = [46.167474, 23.928398];

  //   console.log("Position:", position);

  return (
    <div className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <div className={styles.sideContent}>
          Explorează locația noastră și descoperă cum ne poți găsi. Suntem
          situați într-o locație convenabilă, gata să te întâmpinăm cu soluții
          de sudură profesionale și servicii de încredere.
        </div>
        <div className={styles.mapWrapper}>
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>AVR WELD SOLUTIONS</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className={styles.sideContent}>
          Ai întrebări sau dorești să afli mai multe despre serviciile noastre
          de sudură? Contactează-ne și suntem aici să te ajutăm. Fie că ai
          nevoie de asistență tehnică sau vrei să inițiezi un proiect, suntem
          gata să colaborăm cu tine.
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
