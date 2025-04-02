import { BodyEditorProps } from "@/app/userInterface/squares/SquareBodyTriageComponent";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { squaresService } from "@/store/services/squaresService";
import { CircleHelp, FileCog, Rat } from "lucide-react";
import { JSX } from "react";

type SettingsIconMap = Partial<{
  [key in BodyEditorId]: JSX.Element;
}>;

const iconSize = 160;

const settingsIconMap: SettingsIconMap = {
  editorConfig: <FileCog size={iconSize} />,
  contextMenuConfig: <Rat size={iconSize} />,
  about: <CircleHelp size={iconSize} />,
};

type SettingsButtonProps = {
  text: string;
  target: BodyEditorId;
  panelId: string;
};
function SettingsButton(props: SettingsButtonProps) {
  const onClick = () => {
    squaresService.transformSquare(props.panelId, props.target);
  };
  const mappedIcon = settingsIconMap[props.target];
  const icon = mappedIcon ?? <CircleHelp size={iconSize} />;

  return (
    <button
      onClick={onClick}
      className="p-2 bg-slate-500 rounded-xl hover:bg-slate-600 h-52"
    >
      <div>{icon}</div>
      <div>{props.text}</div>
    </button>
  );
}

export function Settings(props: BodyEditorProps) {
  const ListItem = (elt: React.PropsWithChildren) => (
    <li className="flex h-52">{elt.children}</li>
  );

  return (
    <>
      <ul className="flex flex-row gap-4 flex-wrap justify-center">
        <ListItem>
          <SettingsButton
            text="Tool Settings"
            panelId={props.id}
            target={BodyEditorId.editorConfig}
          />
        </ListItem>
        <ListItem>
          <SettingsButton
            text="Context Menu Settings"
            panelId={props.id}
            target={BodyEditorId.contextMenuConfig}
          />
        </ListItem>
        <ListItem>
          <SettingsButton
            text="About"
            panelId={props.id}
            target={BodyEditorId.about}
          />
        </ListItem>
      </ul>
    </>
  );
}
