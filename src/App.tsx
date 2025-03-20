import { Main } from "./app/Main";

function TopBar() {
  return <div className="w-full text-left text-3xl text-white p-1 font-bold bg-red-700"><h1>SWISS ARMY TAB</h1><p className="text-sm">(a work in progress utility site)</p></div>
}

function App() {
  return (
    <div className="bg-black h-screen w-full dockview-theme-dark flex flex-col">
      <div className="flex-1 w-full"><TopBar/></div>
      <div className="flex-auto w-full"><Main /></div>     
    </div>
  );
}

export default App;
