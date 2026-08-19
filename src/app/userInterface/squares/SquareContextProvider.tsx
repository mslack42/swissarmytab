import { SquareContentProps } from "./SquareContentWrapper";
import { SquareContext } from "./SquareContext";

export const SquareContextProvider = (props: SquareContentProps) => {
  return (
    <SquareContext.Provider value={props}>
      {props.children}
    </SquareContext.Provider>
  );
};
