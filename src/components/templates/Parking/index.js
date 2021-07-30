import React, { useEffect, useState } from "react";
import CarParkExampleData from "../../atoms/CarParksData/carparkdata.json";
import CarParkMap from "../../molecules/CarParkMap";
import ColorKey from "../../molecules/ColorKey";
import CouncilLinks from "../../molecules/CouncilLinks";
import AlternativeTransport from "../../organisms/AlternativeTransport";
import styles from "./Parking.module.css";
import StaticCarParkData from "../../atoms/CarParksData/carparkHardData.json";

export default function Parking() {
  const [data, setData] = useState(CarParkExampleData);
  const [carParks, setCarParks] = useState(null);
  const [option, setOption] = useState("");
  function handleChange(event) {
    setOption(event.target.value);
  }

  useEffect(() => {
    function mergeCarData() {
      let carParkTemp = [];
      if (data.carparks.length == null) {
        for (var i = 0; i < data.carparks.length; i++) {
          carParkTemp.push(data.carparks[i]);
        }
      } else {
        for ( i = 0; i < CarParkExampleData.carparks.length; i++) {
          carParkTemp.push(CarParkExampleData.carparks[i]);
        }
      }

      for (i = 0; i < StaticCarParkData.length; i++) {
        carParkTemp.push(StaticCarParkData[i]);
      }
      setCarParks(carParkTemp);
    }

    fetch(`https://howbusyistoon.com/ncc-car-parks.json`)
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
      <div className={styles.topContainer}>
        {/* ////////////////////Selector/////////////////////// */}
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
                    <option className={styles.option} value={carPark.name}>
                      {carPark.name}
                    </option>
                  ))
                : null}
            </select>
          </div>
        </div>
        {/* /////////////////////////////////////////// */}
        <div className={styles.ColorKey}>
          <ColorKey />
        </div>
      </div>
      <div className={styles.SectionExample}>
        <CarParkMap data={carParks} option={option} />
      </div>
      <div className={styles.SectionExample}>
        <AlternativeTransport />
      </div>
      <div className={styles.CouncilLinks}>
        <CouncilLinks />
      </div>
    </div>
  );
}
