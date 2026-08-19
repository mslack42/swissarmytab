import { IDockviewPanelProps } from "dockview";
import { createContext } from "react";

export const SquareContext = createContext<Partial<IDockviewPanelProps>>({});
