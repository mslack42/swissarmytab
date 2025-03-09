import { useState } from "react";

type BodyEditorProps = {
    dataId: string
}

export function DemoBodyEditor(props: BodyEditorProps) {
  const [bodyText, setBodyText] = useState("dataId: " + props.dataId);
  return (
    <>
        <textarea
          defaultValue={bodyText}
          onChange={(s) => setBodyText(s.currentTarget.value)}
        ></textarea>
    </>
  );
}
