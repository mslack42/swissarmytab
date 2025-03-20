import { Settings } from "lucide-react";
import { Main } from "./app/Main";

function TopBar() {
  return (
    <div className="w-full text-white p-1 font-bold bg-red-700 flex">
      <div className="text-left flex-1 overflow-x-ellipsis text-ellipsis max-h-14 text-nowrap">
        <h1 className="text-3xl">SWISS ARMY TAB</h1>
        <p className="text-sm">(a work in progress utility site)</p>
      </div>
      <div className="text-right flex-none p-2 text-lg">
        <Settings/>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-black h-screen w-full dockview-theme-dark flex flex-col">
      <div className="flex-1 w-full">
        <TopBar />
      </div>
      <div className="flex-auto w-full">
        <Main />
      </div>
    </div>
  );
}

export default App;
