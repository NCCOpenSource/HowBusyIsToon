import React, { useEffect, useState } from "react";
import CarParkExampleData from "../../atoms/CarParksData/carparkdata.json";
import CarParkMap from "../../molecules/CarParkMap";
import ColorKey from "../../molecules/ColorKey";
import CouncilLinks from "../../molecules/CouncilLinks";
import AlternativeTransport from "../../organisms/AlternativeTransport";
import styles from "./Parking.module.css";

export default function Parking() {
  const [data, setData] = useState(CarParkExampleData);
  const [option, setOption] = useState("");
  function handleChange(event) {
    setOption(event.target.value);
  }

  useEffect(() => {
    fetch(`https://howbusyistoon.com/ncc-car-parks.json`)
      .then((response) => {
        response.json();
      })
      .then((response) => {
        setData(response);
        setData(CarParkExampleData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              {data
                ? data.carparks.map((carPark) => (
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
        <CarParkMap data={data} option={option} />
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
