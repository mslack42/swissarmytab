import packageJson from "@/../package.json";
import { SubSettingsWrapper } from "../SubSettingsWrapper";
import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";

export function About(props: BodyEditorProps) {
  const url = "https://github.com/mslack42/swissarmytab";
  return (
    <SubSettingsWrapper panelId={props.id}>
      <div className="h-full flex flex-col justify-start">
        <div className=" flex flex-col justify-start w-full text-center">
          <h1 className="text-2xl font-bold">SWISS ARMY TAB</h1>
          <p>Version: {packageJson.version}</p>
          <a href={url} className="underline">
            {url}
          </a>
        </div>
      </div>
    </SubSettingsWrapper>
  );
}
