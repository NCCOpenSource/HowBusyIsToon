import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.module.css";
import ExampleData from "../../atoms/EVData/example.json";

export default function EvMap() {
  const [activeChargeDevice, setActiveChargeDevice] = useState(null);
  console.log(
    "🚀 ~ file: index.js ~ line 8 ~ EvMap ~ activeChargeDevice",
    activeChargeDevice
  );

  console.log("🚀 ~ file: index.js ~ line 5 ~ ExampleData", ExampleData);

  const setCharger = (ChargeDevice) => {
    console.log(ChargeDevice);
    setActiveChargeDevice(ChargeDevice);
  };

  return (
    <MapContainer center={[54.97206769445005, -1.6132124536205563]} zoom={14}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ExampleData.ChargeDevice.map((ChargeDevice) => (
        <>
          <Marker
            onClick={() => {
              setCharger(ChargeDevice);
            }}
            key={Math.floor(Math.random() * 999999999999)}
            position={[
              ChargeDevice.ChargeDeviceLocation.Latitude,
              ChargeDevice.ChargeDeviceLocation.Longitude,
            ]}
          />
        </>
      ))}
      {activeChargeDevice && (
        <Popup
          position={[
            activeChargeDevice.ChargeDeviceLocation.Latitude,
            activeChargeDevice.ChargeDeviceLocation.Longitute,
          ]}
          onClose={() => {
            setActiveChargeDevice(null);
          }}
        >
          <div>
            <p>hello</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}

// export default class MyMap extends Component {
//   const [state, setstate] = useState(initialState)
//   render() {
//     const { options } = this.props;

//     if (typeof window !== "undefined") {
//       return (
//         <MapContainer
//           center={[54.97206769445005, -1.6132124536205563]}
//           zoom={14}
//         >
//           <TileLayer
//             url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />

//           {ExamnpleData.ChargeDevice.map((ChargeDevice) => (
//             <Marker
//               key={ChargeDevice.ChargeDeviceid}
//               position={[
//                 ChargeDevice.ChargeDeviceLocation.Latitude,
//                 ChargeDevice.ChargeDeviceLocation.Longitute,
//               ]}
//               onClick={() => {
//                 setActiveChargeDevice(ChargeDevice);
//               }}
//             />
//           ))}
//           {activeChargeDevice}
//           {/* <Marker>
//             <Popup></Popup>
//           </Marker> */}
//         </MapContainer>
//       );
//     }
//     return null;
//   }
// }
