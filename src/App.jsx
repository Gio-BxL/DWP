import { useContext } from "react";
import "./App.css";
import Counter from "./Components/Counter/counter";
import InformationComponent from "./Components/Information/informationComponent";
import { GlobalContext } from "./Context/Global/global.context";

function App() {
  const { handleCount } = useContext(GlobalContext);
  
  return (
    <div className="App">
      <InformationComponent/>
    </div>
  );
}

export default App;