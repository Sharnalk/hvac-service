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
        center={centerFrance}
        zoom={5}
        wheelPxPerZoomLevel={1500}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={paca} />
        <GeoJSON data={occitanie} />
        <GeoJSON data={auvRhoneAlpe} />
      </MapContainer>
    </div>
  );
}
