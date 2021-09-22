import { Link } from "gatsby";
import React, { useState } from "react";
import CameraIcon from "../../../assets/icons/Camera.svg";
import CalloutData from "../../atoms/CalloutData";
import GetFeedImage from "../../atoms/GetFeedImage";
import SimpleArticle from "../../atoms/SimpleArticle";
import styles from "./cameraFeed.module.css";

export default function CameraFeed() {
  const [option, setOption] = useState(0);
  function handleChange(event) {
    setOption(event.target.value);
  }
  return (
    <div className={styles.cityCenterCameraFeed}>
      <div className={styles.Callout}>
        <CalloutData />
      </div>

      <div className={styles.infoSelectContainer}>
        <div className={styles.infoContainer}>
          <CameraIcon />
          <p className={styles.info}>
            Feed updated approximately every 5 minutes
          </p>
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
              {/* <option
              className={styles.option}
              value="0"
              label="Northumberland Street"
            >
              Northumberland Street
            </option> */}{" "}
              <option className={styles.option} value="0" label="Grey Street">
                Grey Street
              </option>
              <option
                className={styles.option}
                value="1"
                label="Collingwood Street"
              >
                Collingwood Street
              </option>{" "}
              <option className={styles.option} value="3" label="Barrack Road">
                Barrack Road
              </option>
              <option
                className={styles.option}
                value="4"
                label="Blackett Street 1"
              >
                Blackett Street 1
              </option>
              <option
                className={styles.option}
                value="5"
                label="Blackett Street 2"
              >
                Blackett Street 2
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.feed}>
        <GetFeedImage option={option} />
      </div>
      <Link className={styles.HowBusyAreRoads} to={"/roads"}>
        <SimpleArticle
          TopText="How Busy Are Roads?"
          BottomText="View live traffic updates of the busiest commuter routes in and out of
          the city centre"
        />
      </Link>
      <Link className={styles.HowBusyAreBuses} to={"/transport"}>
        <SimpleArticle
          TopText="How Busy Are Buses?"
          BottomText="View real time bus data on a map of the region to see exactly where
              your next bus is"
        />
      </Link>
    </div>
  );
}
