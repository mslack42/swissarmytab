import { IDockviewPanelProps } from "dockview";
import { SquareContentWrapper } from "./SquareContentWrapper";

export const SquareComponentPanelMap = (c: React.ReactNode) => ((props: IDockviewPanelProps) => <SquareContentWrapper {...props}>{c}</SquareContentWrapper>);
