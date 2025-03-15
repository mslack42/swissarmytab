import { useAppSelector } from "@/store/hooks";
import { selectHasPluralPanels } from "@/store/slices/squaresSlice";
import { IDockviewPanelHeaderProps } from "dockview";
import { X } from "lucide-react";
import { ConfigurableContext, ContextMenuConfiguration } from "../configurableContextMenu/ConfigurableContext";

export function SquareTabHeader(props: IDockviewPanelHeaderProps) {
  const onCloseClick = () => {
    props.api.close();
  };

  const canClose = useAppSelector(selectHasPluralPanels);

  const contextConfiguration:  ContextMenuConfiguration = {
    items: [
        {
            title: "Rename tab",
            actionId: "notimplemented",
            itemType: "action"
        },
        {
            title: "Duplicate tab",
            actionId: "notimplemented",
            itemType: "action"
        },
        {
            title: "Transform tab",
            actionId: "notimplemented",
            itemType: "action"
        },
        {
            itemType: "separator"
        },
        {
            title: "Test Submenu",
            itemType: "submenu",
            submenu: [
                {
                    title: "Test action",
                    actionId: "notimplemented",
                    itemType: "action"
                },
                {
                    title: "Test subsubmenu",
                    itemType: "submenu",
                    submenu: [
                        {
                            title: "Test action",
                            actionId: "notimplemented",
                            itemType: "action"
                        },
                        {
                            title: "Test action",
                            actionId: "notimplemented",
                            itemType: "action"
                        }
                    ]
                }
            ]
        }
    ]
  }

  return (
    <ConfigurableContext configuration={contextConfiguration}>
      <div className="bg-amber-400 h-full w-full px-1 flex flex-row">
        <div>{props.api.title}</div>
        {canClose ? <X onClick={onCloseClick} /> : <></>}
      </div>
    </ConfigurableContext>
  );
}
