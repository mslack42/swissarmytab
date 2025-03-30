import { Main } from "./app/Main";
import { TopBar } from "./TopBar";

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
