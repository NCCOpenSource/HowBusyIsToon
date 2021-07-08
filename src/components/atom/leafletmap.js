// import React from "react";
// import PropTypes from "prop-types";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// // import './leafletmap.css'

// export default function leafletmap() {
//   const propTypes = {
//     /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
//     position: PropTypes.array,

//     /** Initial zoom level for the map (default 13) **/
//     zoom: PropTypes.number,

//     /** If set, will display a marker, which when clicked will display this text **/
//     markerText: PropTypes.string,
//   };

//   const defaultProps = {
//     position: [51, -1],
//     zoom: 13,
//     markerText: "",
//   };

//   return (
//     <Map>
//       <TileLayer
//         url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker>
//         <Popup></Popup>
//       </Marker>
//     </Map>
//   );
// }
