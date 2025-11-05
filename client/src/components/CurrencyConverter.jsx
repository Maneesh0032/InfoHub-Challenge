import { useEffect, useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch("https://infohub-server.onrender.com/api/convert?from=USD&to=INR")
      .then(res => res.json())
      .then(data => setRate(data.rate))
      .catch(() => setRate(null));
  }, [from, to]);

  const converted = rate ? (amount * rate).toFixed(2) : "…";

  return (
    <div className="card">
      <h2>💱 Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <select value={from} onChange={e => setFrom(e.target.value)}>
        <option>USD</option>
        <option>EUR</option>
        <option>INR</option>
        <option>GBP</option>
      </select>
      <select value={to} onChange={e => setTo(e.target.value)}>
        <option>USD</option>
        <option>EUR</option>
        <option>INR</option>
        <option>GBP</option>
      </select>
      <p>
        {amount} {from} = <strong>{converted} {to}</strong>
      </p>
    </div>
  );
}

export default CurrencyConverter;
