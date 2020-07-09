import React, { useState } from "react";
import ReactDOM from "react-dom";

import { TextKonfettikanone } from "../src/index.ts";
import * as styles from "./styles.js";

function App() {
  const [launch, setLaunch] = useState(false);

  function onLaunchEnd() {
    setLaunch(false);
  }

  function handleLaunch() {
    setLaunch(true);
  }

  return (
    <>
      <h1 className={styles.h1}>🎉 react-text-konfettikanone 🎉</h1>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <TextKonfettikanone
            launch={launch}
            onLaunchEnd={onLaunchEnd}
            className={styles.customStyles}
            fontSizes={['x-small']}
            text="react-text-konfettikanone"
          />
          <h2>🎊 Hooray, hooray! 🎊</h2>
          <p>
            Floating everywhere
            <br />
            Show me how to find
            <br />
            Confetti, confetti, confetti
            <br />
            Cover us this time
            <br />
          </p>
          <p>Let's celebrate and throw some confetti!</p>
          <button type="button" onClick={handleLaunch}>
            Hooray!
          </button>
        </div>
      </div>
    </>
  );
}

const app = document.querySelector("#app");
ReactDOM.render(<App />, app);
