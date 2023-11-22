import './App.css';
import Header from "./HeaderAndFooter/Header";

function App() {
  const navItemSelected = (itemId) => {
    console.log(itemId);
  }

  return (
    <div className="App">
      <Header navItemSelected={navItemSelected} />
    </div>
  );
}

export default App;
