import React from "react";

import styles from "./styles.module.css";

export default function DownloadList({ assets }) {
  return (
    <>
      <div>
        <h3>Testing</h3>
        {assets && assets.map( (e) => (<li>{e.url}</li>) )}
      </div>
    </>
  );
}
