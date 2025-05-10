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
      alert('Please enter valid positive numbers');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admiralty Coefficient Calculator</h1>

      {/* Formula Display */}
      <div className="mb-6 p-3 bg-gray-100 rounded">
        <p className="font-mono">C = (D<sup>2/3</sup> × V<sup>3</sup>) / P</p>
        <p className="text-sm mt-1">Where: D = Displacement (tons), V = Speed (knots), P = Shaft Power (kW)</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateAdmiraltyCoefficient();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block font-semibold">
            Displacement (D) (tons):
          </label>
          <input
            type="number"
            value={displacement}
            onChange={(e) => setDisplacement(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">
            Speed (V) (knots):
          </label>
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">
            Shaft Power (P) (kW):
          </label>
          <input
            type="number"
            value={shaftPower}
            onChange={(e) => setShaftPower(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate
        </button>
      </form>

      {admiraltyCoefficient !== null && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p>Admiralty Coefficient: <strong>{admiraltyCoefficient.toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  );
};

export default AdmiraltyCoefficientPage;