// import { useEffect, useState } from "react";
// import BusData from "./BusDataExample.json";

// export default function BusesData() {
//   const [data, setData] = useState(BusData);
//   console.log("🚀 ~ file: index.js ~ line 7 ~ BusesData ~ data", data);
//   console.log("🚀 ~ file: index.js ~ line 7 ~ BusesData ~ data", data);
//   console.log("🚀 ~ file: index.js ~ line 7 ~ BusesData ~ data", data);
//   console.log("🚀 ~ file: index.js ~ line 7 ~ BusesData ~ data", data);
//   console.log("🚀 ~ file: index.js ~ line 7 ~ BusesData ~ data", data);
//   const data2 = BusData;
//   console.log(BusData);

//   useEffect(() => {
//     function callData() {
//       console.log("working");
//       fetch(
//         `https://buses.dev.urbanobservatory.ac.uk/vm
//       `
//       )
//         // .then((response) => {response.json(); console.log(response)})
//         // .then((response) => response.json())
//         .then((response) => {
//           setData(response);
//           console.log(
//             "🚀 ~ file: index.js ~ line 25 ~ .then ~ response",
//             response
//           );
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }

//     callData();
//   }, []);

//   return { data2 };
// }
