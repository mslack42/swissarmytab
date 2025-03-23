import { IDockviewPanelProps } from "dockview";

type SquareContentProps = React.PropsWithChildren & IDockviewPanelProps;
export function SquareContentWrapper(props: SquareContentProps) {
    return (
        <div className="h-full overflow-auto relative bg-red rb-xl p-2">
            <div className="h-full w-full p-2 border-black overflow-hidden text-white">
                {props.children}
            </div>
        </div>
    );
}
