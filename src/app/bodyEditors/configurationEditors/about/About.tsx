import packageJson from "@/../package.json";
import { SubSettingsWrapper } from "../SubSettingsWrapper";
import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { Separator } from "@radix-ui/react-context-menu";

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
          <Separator className="h-8" />
          <p>
            The intention of Swiss Army Tab is to provide a simple collection of
            developer utilities.
          </p>
          <p>
            These functions should all be provided locally entirely within the
            browser - no server, no data storage.
          </p>
          <p>
            All persistence in these tools should be provided by browser local
            storage.
          </p>
          <p>
            It is intended to eventually support data export, but it is assumed
            that any data stored in Swiss Army is not precious.
          </p>
          <p>
            Primary design focus is on frictionless usability, with sensible
            configurability options.
          </p>
          <Separator className="h-6" />
          <p>Suggestions welcome.</p>
        </div>
      </div>
    </SubSettingsWrapper>
  );
}
