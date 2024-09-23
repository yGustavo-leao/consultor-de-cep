import { useState } from "react";
import { Panel } from "./components/panel/Panel";
import { DataContext } from "./context/DataContext";
import './css/App.css'

function App() {

  const [data, setData] = useState({});
  return (
    <div className="App">
      <DataContext.Provider value={{data, setData}}>
        <Panel />
      </DataContext.Provider>
    </div>
  );
}

export default App;
