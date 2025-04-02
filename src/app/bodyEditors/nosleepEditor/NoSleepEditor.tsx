import { useState } from "react";
import NoSleep from "@uriopass/nosleep.js";

const noSleepHandler = new NoSleep();

export function NoSleepEditor() {
  const [sleep, setSleep] = useState(false);

  const toggleSleep = (newSleep: boolean) => {
    setSleep(newSleep);
    if (newSleep) {
      noSleepHandler.enable();
    } else {
      noSleepHandler.disable();
    }
  };

  return (
    <>
      <button onClick={() => toggleSleep(!sleep)}>
        {sleep ? <p>GREEN</p> : <p>RED</p>}
      </button>
    </>
  );
}
