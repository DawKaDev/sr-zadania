import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export default function Map({coordinates}) {
  return (
    <MapContainer style={{height: "100%"}} center={coordinates} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}/>
    </MapContainer>
  )
}