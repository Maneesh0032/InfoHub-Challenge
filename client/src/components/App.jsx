import { useState } from "react";
import WeatherModule from "./components/WeatherModule";
import CurrencyConverter from "./components/CurrencyConverter";
import QuoteGenerator from "./components/QuoteGenerator";

export default function App() {
  const [activeTab, setActiveTab] = useState("Weather");

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">InfoHub</h1>
      <div className="flex justify-center gap-4 mb-8">
        {["Weather", "Currency", "Quote"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg font-semibold ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        {activeTab === "Weather" && <WeatherModule />}
        {activeTab === "Currency" && <CurrencyConverter />}
        {activeTab === "Quote" && <QuoteGenerator />}
      </div>
    </div>
  );
}
