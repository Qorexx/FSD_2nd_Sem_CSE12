import React, { useState } from 'react';
import './index.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    
    if (value === '') {
      setFahrenheit('');
      return;
    }

    const c = parseFloat(value);
    if (!isNaN(c)) {
      const f = (c * 9) / 5 + 32;
      setFahrenheit(Math.round(f * 100) / 100);
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    
    if (value === '') {
      setCelsius('');
      return;
    }

    const f = parseFloat(value);
    if (!isNaN(f)) {
      const c = ((f - 32) * 5) / 9;
      setCelsius(Math.round(c * 100) / 100);
    }
  };

  return (
    <div className="container">
      <h2>Temperature Converter</h2>
      
      <div className="input-group">
        <label>Celsius (°C):</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
        />
      </div>

      <div className="input-group">
        <label>Fahrenheit (°F):</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
}

export default App;
