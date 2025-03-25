import { IDockviewPanelProps } from "dockview";

type SquareContentProps = React.PropsWithChildren & IDockviewPanelProps;
export function SquareContentWrapper(props: SquareContentProps) {
    return (
        <div className="h-full overflow-auto relative rb-xl p-2">
            <div className="h-full w-full p-2 border-black text-white">
                <div>
                {props.children}
                </div>
            </div>
        </div>
    );
}
