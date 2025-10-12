import { useState } from "react";
import NoSleep from "@uriopass/nosleep.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const noSleepHandler = new NoSleep();

export function KeepAwakeEditor() {
  const [sleep, setSleep] = useState(false);

  const toggleSleep = (newSleep: boolean) => {
    setSleep(newSleep);
    if (newSleep) {
      noSleepHandler.enable();
    } else {
      noSleepHandler.disable();
    }
  };

  const powershellScript = `$wsh = New-Object -ComObject WScript.Shell;\n\
while (1) {\n\
  $wsh.SendKeys('+{F15}');\n\
  Start-Sleep -seconds 29;\n\
}`;

  return (
    <div>
      <button onClick={() => toggleSleep(!sleep)}>
        <div
          className={
            "p-1 px-2 rounded-lg" + (sleep ? " bg-green-500 " : " bg-red-500")
          }
        >
          {sleep ? (
            <p>Press the button to release the wake lock</p>
          ) : (
            <p>Press the button prevent your computer from going to sleep</p>
          )}
        </div>
      </button>
      <h2 className="italic text-sm">Not working for you?</h2>
      <p className="italic text-sm">
        If Powershell is an option, you could try the following script, which
        simulates F15 button presses at regular intervals
      </p>
      <SyntaxHighlighter language="powershell" style={a11yDark} showLineNumbers>
        {powershellScript}
      </SyntaxHighlighter>
    </div>
  );
}
