
import React from "react";
import stylesOverlay from "./navOverlay.module.css";
import {Link} from "gatsby";


export default function NavMobileOverlay() {
    return (
        <div className={stylesOverlay.overlay} >
        <ul className={stylesOverlay.mobile__list}>
          <Link className={stylesOverlay.mobile_list_item} to="/">
            How busy is it?
          </Link>

          <Link className={stylesOverlay.mobile_list_item} to="/safetymeasures">
            Safety measures
          </Link>

          <Link className={stylesOverlay.mobile_list_item} to="/shopping">
            Shops & restaurants
          </Link>

          <Link className={stylesOverlay.mobile_list_item} to="/parking">
            Safe travel & parking
          </Link>

          <Link className={stylesOverlay.mobile_list_item} to="/about">
            About
          </Link>
        </ul>
      </div>
    )
}
