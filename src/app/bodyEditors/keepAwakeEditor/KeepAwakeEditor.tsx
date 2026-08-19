import { useState } from "react";
import NoSleep from "@uriopass/nosleep.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const noSleepHandler = new NoSleep();

export function KeepAwakeEditor() {
  const [sleep, setSleep] = useState(false);

  const toggleSleep = (newSleep: boolean) => {
    setSleep(newSleep);
    if (!newSleep) {
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
      <h2 className="text-lg">Powershell</h2>
      <p className="text-sm">
        The following script simulates F15 button presses at regular intervals
      </p>
      <SyntaxHighlighter language="powershell" style={a11yDark} showLineNumbers>
        {powershellScript}
      </SyntaxHighlighter>
      <div className="p-3 w-full flex flex-row justify-center">
        <CopyButton text={powershellScript} />
      </div>
      <br />
      <h2 className="text-lg">Browser (WIP)</h2>
      <p className="text-sm">
        Toggling this button runs some code in your browser in an attempt to
        keep the window active.
      </p>
      <div className="p-3 w-full flex flex-row justify-center">
        <button onClick={() => toggleSleep(!sleep)}>
          <div
            className={
              "p-1 px-2 rounded-lg" +
              (!sleep ? " bg-green-500 " : " bg-red-500")
            }
          >
            {sleep ? <p>Sleeping...</p> : <p>AWAKE</p>}
          </div>
        </button>
      </div>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="w-24 bg-slate-500 hover:bg-slate-300 rounded-sm p-1"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
