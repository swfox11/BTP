'use client';

import { useState } from 'react';

const AdmiraltyCoefficientPage = () => {
  const [displacement, setDisplacement] = useState<string>('');
  const [speed, setSpeed] = useState<string>('');
  const [shaftPower, setShaftPower] = useState<string>('');
  const [admiraltyCoefficient, setAdmiraltyCoefficient] = useState<number | null>(null);

  const calculateAdmiraltyCoefficient = () => {
    const d = parseFloat(displacement);
    const v = parseFloat(speed);
    const p = parseFloat(shaftPower);

    if (!isNaN(d) && !isNaN(v) && !isNaN(p) && d > 0 && v > 0 && p > 0) {
      const coefficient = (Math.pow(d, 2 / 3) * Math.pow(v, 3)) / p;
      setAdmiraltyCoefficient(coefficient);
    } else {
      alert('Please enter valid positive numbers for displacement, speed, and shaft power.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Admiralty Coefficient</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateAdmiraltyCoefficient();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="displacement" className="block font-semibold">
            Displacement (D) (tons):
          </label>
          <input
            type="number"
            id="displacement"
            value={displacement}
            onChange={(e) => setDisplacement(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter displacement in tons"
          />
        </div>
        <div>
          <label htmlFor="speed" className="block font-semibold">
            Speed (V) (knots):
          </label>
          <input
            type="number"
            id="speed"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter speed in knots"
          />
        </div>
        <div>
          <label htmlFor="shaftPower" className="block font-semibold">
            Shaft Power (P) (kW):
          </label>
          <input
            type="number"
            id="shaftPower"
            value={shaftPower}
            onChange={(e) => setShaftPower(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter shaft power in kW"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate Admiralty Coefficient
        </button>
      </form>

      {admiraltyCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Admiralty Coefficient: <strong>{admiraltyCoefficient.toFixed(2)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default AdmiraltyCoefficientPage;
