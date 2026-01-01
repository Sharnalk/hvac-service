"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import paca from "@/lib/departements/region-provence-alpes-cote-d-azur.json";
import occitanie from "@/lib/departements/region-occitanie.json";
import auvRhoneAlpe from "@/lib/departements/region-auvergne-rhone-alpes.json";

export default function MapFrance() {
  const centerFrance = [46.2276, 2.2137];

  return (
    <div className="aspect-video rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
      <MapContainer

        bounds={[
          [51.1, -5.1],
          [41.3, 9.6],
        ]}
        boundsOptions={{ padding: [100, 100] }}
        style={{ height: "150%", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={paca} />
        <GeoJSON data={occitanie} />
        <GeoJSON data={auvRhoneAlpe} />
      </MapContainer>
    </div>
  );
}
