import { Settings } from "lucide-react";
import { squaresService } from "./store/services/squaresService";

export function TopBar() {
  const openSettings = () => {
    squaresService.openEditorSettings()
  }

  return (
    <div className="w-full text-white p-1 font-bold bg-red-700 flex">
      <div className="text-left flex-1 overflow-x-ellipsis text-ellipsis max-h-14 text-nowrap">
        <h1 className="text-3xl">SWISS ARMY TAB</h1>
        <p className="text-sm">(a work in progress utility site)</p>
      </div>
      <div className="text-right flex-none p-2 text-lg">
        <Settings onClick={openSettings}/>
      </div>
    </div>
  );
}