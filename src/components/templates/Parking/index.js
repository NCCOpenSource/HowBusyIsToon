import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Box from "../../atoms/Box";
import CarParkExampleData from "../../atoms/CarParksData/carparkdata.json";
// import StaticCarParkData from "../../atoms/CarParksData/carparkHardData.json";
import CarParkMap from "../../molecules/CarParkMap";
import ColorKey from "../../molecules/ColorKey";
import CouncilLinks from "../../molecules/CouncilLinks";
import AlternativeTransport from "../../organisms/AlternativeTransport";
import styles from "./Parking.module.css";

export default function Parking() {
  const [data, setData] = useState(CarParkExampleData);
  const [carParks, setCarParks] = useState(null);
  const [option, setOption] = useState("");
  function handleChange(event) {
    setOption(event.target.value);
  }

  useEffect(() => {
    function mergeCarData() {
      let id = 0;
      let carParkTemp = [];
      if (!data.carparks.length) {
        for (var i = 0; i < data.carparks.length; i++) {
          carParkTemp.push(data.carparks[i]);
          carParkTemp[i].id = id++;
        }
      } else {
        for (i = 0; i < CarParkExampleData.carparks.length; i++) {
          carParkTemp.push(CarParkExampleData.carparks[i]);
          carParkTemp[i].id = id++;
        }
      }

      // for (i = 0; i < StaticCarParkData.length; i++) {
      //   carParkTemp.push(StaticCarParkData[i]);
      //   carParkTemp[i].id = id++;
      // }
      setCarParks(carParkTemp);
    }

    fetch(`https://howbusyistoon.dev.urbanobservatory.ac.uk/ncc-car-parks.json`)
      .then((response) => {
        response.json();
      })
      .then((response) => {
        setData(response);
        mergeCarData();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.calloutContainer}>
        <h1 className={styles.calloutHeadText}>Real Time Parking Data</h1>
        <h3 className={styles.calloutText}>
          Real time parking data for key car parks based on in/out ANPR counts
          providing an indicator of the available spaces. Some of these spaces
          may be limited to certain users. Information on other car parking
          without real time occupancy information is available{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://community2.newcastle.gov.uk/apps2/car-parks"
          >
            here
          </a>
          .
        </h3>
      </div>
      <div className={styles.select}>
        <div className={styles.selectbox}>
          <select
            className={styles.selector}
            name="option"
            onChange={handleChange}
            onBlur={handleChange}
          >
            {" "}
            <option className={styles.option} value="">
              Show Every Car Park
            </option>
            {carParks
              ? carParks.map((carPark) => (
                  <option
                    key={carPark.id}
                    className={styles.option}
                    value={carPark.name}
                  >
                    {carPark.name}
                  </option>
                ))
              : null}
          </select>
        </div>
      </div>
      <div className={styles.ColorKey}>
        <ColorKey ToggleCarPark />
      </div>
      <div className={styles.CarParkMap}>
        <CarParkMap data={carParks} option={option} />
      </div>
      {/* <div className={styles.SectionExample}>
        <AlternativeTransport />
      </div> */}
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
