import { ChevronDown, ChevronUp, Settings, Folder } from "lucide-react";
import { squaresService } from "./store/services/squaresService";
import { useAppSelector } from "./store/redux/hooks";
import {
  isTopBarMinimised,
  setIsTopBarMinimised,
} from "./store/redux/slices/userSlice";
import { store } from "@/store/redux/store";

export function TopBar() {
  const minimise = useAppSelector(isTopBarMinimised);
  const toggleMinimise = () => {
    store.dispatch(setIsTopBarMinimised(!minimise));
  };
  const openSettings = () => {
    squaresService.openEditorSettings();
  };
  const openDataDirectory = () => {
    alert("Not implemented yet");
  };

  return (
    <div className="relative min-h-2 bg-red-700">
      {minimise ? (
        <></>
      ) : (
        <div className="w-full text-white p-1 font-bold flex">
          <div className="text-left flex-1 overflow-x-ellipsis text-ellipsis max-h-14 text-nowrap">
            <h1 className="text-3xl">SWISS ARMY TAB</h1>
          </div>
          <div className="text-right flex flex-row justify-end gap-3 p-2 text-lg">
            <Folder onClick={openDataDirectory} />
            <Settings onClick={openSettings} />
          </div>
        </div>
      )}

      <div className="absolute bottom-1 right-0 left-0 h-1 w-full">
        <div className="w-full flex flex-row justify-center">
          <button
            className="bg-white w-20 z-50 rounded-2xl flex flex-row justify-center hover:bg-slate-200"
            onClick={toggleMinimise}
          >
            {minimise ? (
              <ChevronDown className="text-black" size={8} />
            ) : (
              <ChevronUp className="text-black" size={8} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
