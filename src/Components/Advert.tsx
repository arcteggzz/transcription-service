import React from "react";
import styles from "./Advert.module.scss";
import SpotifyAdvert from "../assets/images/spotifyAdvert.png";

function Advert() {
  return (
    <div className={styles.advert}>
      <img src={SpotifyAdvert} alt="" className="" />
    </div>
  );
}

export default Advert;
