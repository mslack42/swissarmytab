import { IDockviewPanelProps } from "dockview";
import { SquareContextProvider } from "./SquareContextProvider";

export type SquareContentProps = React.PropsWithChildren & IDockviewPanelProps;

export function SquareContentWrapper(props: SquareContentProps) {
  return (
    <div className="h-full overflow-auto relative rb-xl p-2">
      <div className="h-full w-full p-2 border-black text-white">
        <SquareContextProvider {...props} />
      </div>
    </div>
  );
}
