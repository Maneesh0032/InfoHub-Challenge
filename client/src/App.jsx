import WeatherModule from "./components/WeatherModule";
import CurrencyConverter from "./components/CurrencyConverter";
import QuoteGenerator from "./components/QuoteGenerator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>🌍 Info Hub</h1>
      <div className="modules">
        <WeatherModule />
        <CurrencyConverter />
        <QuoteGenerator />
      </div>
    </div>
  );
}

export default App;
