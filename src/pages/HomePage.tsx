import React, { useState, useRef } from "react";
import Advert from "../Components/Advert";
import Topbar from "../Components/Topbar";
import Transcription from "../Components/Transcription";
import Audio from "../Components/Audio";
import Sound from "../assets/spartans_300.mp3";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.top_container}>
          <Topbar />
        </div>
        <div className={styles.main_container}>
          <div className={styles.body_container}>
            <Advert />
            <div className={styles.transcription_container}>
              <Audio />
              <Transcription />
            </div>
          </div>
        </div>
      </div>
      <audio src={Sound} />
    </>
  );
};

export default HomePage;
