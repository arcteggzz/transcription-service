import React from "react";
import styles from "./Transcription.module.scss";

function Transcription() {
  const formattedData = [
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
    {
      id: 1,
      timeCount: "0:00",
      stringText:
        "This is the second section of your IELTS General Training Writing test. You should spend about 40 minutes on it.",
      isActive: false,
    },
  ];

  return (
    <div className={styles.TranscriptionsList}>
      <div className={styles.headText}>
        <h2>Transcribed Text</h2>
      </div>
      <div>
        <div className={styles.Lists}>
          {formattedData.map((list, index) => {
            return (
              <div className={styles.listItem} key={list.id * index}>
                <h4
                  className={
                    list.isActive
                      ? styles.listItemActive
                      : styles.listItemInActiveh4
                  }
                >
                  {list.timeCount}
                </h4>
                <p
                  className={
                    list.isActive
                      ? styles.listItemActive
                      : styles.listItemInActiveP
                  }
                >
                  {list.stringText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Transcription;
