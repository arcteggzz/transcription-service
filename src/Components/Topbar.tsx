import React from "react";
import styles from "./Topbar.module.scss";

function Topbar() {
  return (
    <nav className={styles.container}>
      <p>Logo</p>
      <p>User</p>
    </nav>
  );
}

export default Topbar;
