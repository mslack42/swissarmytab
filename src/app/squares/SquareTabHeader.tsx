import { useAppSelector } from "@/store/hooks";
import { selectHasPluralPanels } from "@/store/slices/squaresSlice";
import { IDockviewPanelHeaderProps } from "dockview";
import { X } from "lucide-react";
import { ConfigurableContext } from "../configurableContextMenu/ConfigurableContext";

export function SquareTabHeader(props: IDockviewPanelHeaderProps) {
  const onCloseClick = () => {
    props.api.close();
  };

  const canClose = useAppSelector(selectHasPluralPanels);

  return (
    <ConfigurableContext configuration={{}}>
      <div className="bg-amber-400 h-full w-full px-1 flex flex-row">
        <div>{props.api.title}</div>
        {canClose ? <X onClick={onCloseClick} /> : <></>}
      </div>
    </ConfigurableContext>
  );
}
