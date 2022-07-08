import './App.css';
import logo from "./logo.svg";
import Table from "./components/CoinTable/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo"/>
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <main>
        <Table />
      </main>
    </div>
  );
}

export default App;
