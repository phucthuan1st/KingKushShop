import "./App.css";
import { React, useState } from "react";
import Header from "./components/web/header";
import FeaturingProducts from "./components/web/featuringProducts";
function App() {
  const [selectedItem, setSelectedItem] = useState("home");

  return (
    <div className="App">
      <div className="container">
        <Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      </div>
      <div className="container centered">
        <FeaturingProducts />
      </div>
      <div className="container"></div>
    </div>
  );
}

export default App;
