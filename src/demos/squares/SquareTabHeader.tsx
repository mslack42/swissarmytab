import { IDockviewPanelHeaderProps, DockviewDefaultTab } from "dockview";

export function SquareTabHeader(props: IDockviewPanelHeaderProps) {
    return <div className="bg-amber-400 h-full w-full px-1">
        <span>{props.api.title}{props.api.title}{props.api.title}{props.api.title}{props.api.title}{props.api.title}{props.api.title}</span>
    </div>;
}
