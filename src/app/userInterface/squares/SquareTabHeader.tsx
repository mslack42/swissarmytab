import { useAppSelector } from "@/store/redux/hooks";
import { selectHasPluralPanels } from "@/store/redux/slices/squaresSlice";
import { IDockviewPanelHeaderProps } from "dockview";
import { X } from "lucide-react";
import {
  ConfigurableContext,
  ContextMenuConfiguration,
} from "../configurableContextMenu/ConfigurableContext";
import { RenameSquareDialog } from "../dialogs/RenameSquareDialog";
import { useState } from "react";
import { squaresService } from "@/store/services/squaresService";


enum TabActions {
  "rename",
  "duplicate",
  "transform",
}

export function SquareTabHeader(props: IDockviewPanelHeaderProps) {
  const onCloseClick = () => {
    props.api.close();
  };
  const canClose = useAppSelector(selectHasPluralPanels);
  const [renameOpen, setRenameOpen] = useState(false)

  const contextConfiguration: ContextMenuConfiguration = {
    items: [
      {
        title: "Rename tab",
        actionId: TabActions.rename.toString(),
        itemType: "action",
      },
      {
        title: "Duplicate tab",
        actionId: TabActions.duplicate.toString(),
        itemType: "action",
      },
      {
        title: "Transform tab",
        actionId: TabActions.transform.toString(),
        itemType: "action",
      },
    ],
  };

  function actionHandler(action: string) {
    switch (action) {
      case TabActions.rename.toString():
        setRenameOpen(true)
        break;
      case TabActions.duplicate.toString():
        dupeTab()
        break;
      default:
        alert("Action not implemented!");
    }
  }

  function onRenameSubmit(name: string) {
    const renamed = squaresService.renameSquare(props.api.id, name, props.api)
    if (!renamed) {
      alert("Toast for failure later - do something with errors to say that tab already exists with that name")
    }
  }

  function dupeTab() {
    squaresService.dupeSquare(props.api, props.containerApi)
  }

  return (
    <>
      <ConfigurableContext
        configuration={contextConfiguration}
        onActionSelection={actionHandler}
      >
        <div className="bg-amber-400 h-full w-full px-1 flex flex-row">
          <div>{props.api.title}</div>
          {canClose ? <X onClick={onCloseClick} /> : <></>}
        </div>
      </ConfigurableContext>
      <RenameSquareDialog
        tabName={props.api.title!}
        open={renameOpen}
        setOpen={setRenameOpen}
        onClose={(newName: string) => {
          setRenameOpen(false)
          onRenameSubmit(newName)
        }}
      />
    </>
  );
}
