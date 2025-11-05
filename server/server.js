import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city || "Hyderabad";
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      return res.json({ error: "City not found" });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});


app.get("/api/convert", async (req, res) => {
  try {
    const { from = "USD", to = "INR" } = req.query;
    const apiKey = process.env.EXCHANGE_API_KEY;

    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`
    );
    const data = await response.json();

    if (data.result !== "success") {
      return res.json({ error: "Invalid currency" });
    }

    res.json({ rate: data.conversion_rate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch exchange rate" });
  }
});


const quotes = [
  "The secret of getting ahead is getting started.",
  "Believe you can and you're halfway there.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "Do something today that your future self will thank you for.",
  "Don’t watch the clock; do what it does. Keep going."
];

app.get("/api/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
