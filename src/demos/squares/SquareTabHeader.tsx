import { IDockviewPanelHeaderProps } from "dockview";
import { X } from "lucide-react";

export function SquareTabHeader(props: IDockviewPanelHeaderProps) {
    const onCloseClick = () => {
        props.api.close()
    }
    
    return <div className="bg-amber-400 h-full w-full px-1 flex flex-row">
        <div>{props.api.title}</div>
        <X onClick={onCloseClick}/> 
    </div>;
}
