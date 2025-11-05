import { useEffect, useState } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("/api/quote")
      .then(res => res.json())
      .then(data => setQuote(data.quote))
      .catch(() => setQuote("Failed to load quote"));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="card">
      <h2>💬 Quote Generator</h2>
      <p>{quote}</p>
      <button onClick={getQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
