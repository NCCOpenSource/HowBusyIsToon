import React from "react";
import stylesOverlay from "./navOverlay.module.css";
import { Link } from "gatsby";

export default function NavMobileOverlay(props) {
  const subInfo = props.Links;
  const linkList = subInfo.map((subInformation) => {
    return (
      <>
        {/* <h1 className={stylesOverlay.mobile_list_title}>
          {subInformation.title}
        </h1> */}
        {subInformation.subInfo.map((Links) => (
          <Link
            className={stylesOverlay.mobile_list_item}
            href={"/" + Links.slug}
          >
            {Links.subTitles}
          </Link>
        ))}
      </>
    );
  });
  return (
    <div className={stylesOverlay.overlay}>
      <ul className={stylesOverlay.mobile__list}>{linkList}</ul>
    </div>
  );
}
