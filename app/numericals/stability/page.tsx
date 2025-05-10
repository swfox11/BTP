'use client';

import { useState } from 'react';

const StabilityCheckPage = () => {
  const [breadth, setBreadth] = useState<string>(''); // B
  const [draught, setDraught] = useState<string>(''); // T
  const [kg, setKg] = useState<string>(''); // KG
  const [km, setKm] = useState<number | null>(null); // KM
  const [gm, setGm] = useState<number | null>(null); // GM
  const [stability, setStability] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateStability = () => {
    // Reset previous results
    setKm(null);
    setGm(null);
    setStability(null);
    setError(null);

    // Validate inputs
    if (!breadth || !draught || !kg) {
      setError('All fields are required');
      return;
    }

    const B = parseFloat(breadth);
    const T = parseFloat(draught);
    const KG = parseFloat(kg);

    // Edge case handling
    if (isNaN(B)) {
      setError('Breadth must be a valid number');
      return;
    }
    if (isNaN(T)) {
      setError('Draught must be a valid number');
      return;
    }
    if (isNaN(KG)) {
      setError('KG must be a valid number');
      return;
    }
    if (B <= 0) {
      setError('Breadth must be greater than 0');
      return;
    }
    if (T <= 0) {
      setError('Draught must be greater than 0');
      return;
    }
    if (KG < 0) {
      setError('KG cannot be negative');
      return;
    }
    if (KG > T * 2) {
      setError('KG is unusually high for given draught');
      // Continue calculation but flag warning
    }

    // Calculations
    const KM = T / 2 + (B ** 2) / (12 * T);
    const GM = KM - KG;
    
    setKm(KM);
    setGm(GM);
    
    // Enhanced stability assessment
    if (GM > 0.3) {
      setStability('Highly Stable');
    } else if (GM > 0) {
      setStability('Marginally Stable');
    } else if (GM === 0) {
      setStability('Neutral Stability');
    } else {
      setStability('Unstable');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Rectangular Barge Stability Calculator</h1>
      
      {/* Theory Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Stability Formulas</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="font-mono bg-gray-100 p-1 rounded mr-2">KM = T/2 + B²/(12T)</span>
            <span>KM = KB + BM </span>
          </div>
          <div className="flex items-center">
            <span className="font-mono bg-gray-100 p-1 rounded mr-2">GM = KM - KG</span>
            <span>Metacentric Height</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Where: B = Breadth, T = Draught, KG = Center of Gravity height
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateStability();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="breadth" className="block font-medium text-gray-700 mb-1">
            Breadth (B) in meters:
          </label>
          <input
            type="number"
            id="breadth"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 10.5"
            step="0.1"
            min="0.1"
          />
        </div>

        <div>
          <label htmlFor="draught" className="block font-medium text-gray-700 mb-1">
            Draught (T) in meters:
          </label>
          <input
            type="number"
            id="draught"
            value={draught}
            onChange={(e) => setDraught(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 3.2"
            step="0.1"
            min="0.1"
          />
        </div>

        <div>
          <label htmlFor="kg" className="block font-medium text-gray-700 mb-1">
            Center of Gravity (KG) in meters:
          </label>
          <input
            type="number"
            id="kg"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 2.8"
            step="0.1"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calculate Stability
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {km !== null && gm !== null && stability && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold mb-3 text-green-800">Stability Results</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-sm text-gray-600">KM</p>
              <p className="text-lg font-mono font-bold">{km.toFixed(4)} m</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Metacentric Height (GM)</p>
              <p className="text-lg font-mono font-bold">{gm.toFixed(4)} m</p>
            </div>
          </div>

          <div className={`p-3 rounded ${
            stability.includes('Unstable') ? 'bg-red-100 text-red-800' : 
            stability.includes('Marginally') ? 'bg-yellow-100 text-yellow-800' : 
            'bg-green-100 text-green-800'
          }`}>
            <p className="font-semibold">Stability Status: {stability}</p>
            {stability === 'Highly Stable' && (
              <p className="text-sm mt-1">Vessel has excellent stability characteristics</p>
            )}
            {stability === 'Marginally Stable' && (
              <p className="text-sm mt-1">Caution: Stability is minimal, consider reducing KG</p>
            )}
            {stability === 'Unstable' && (
              <p className="text-sm mt-1">Danger: Vessel will capsize, KG must be reduced</p>
            )}
          </div>

          {/* Stability Interpretation Guide */}
          <div className="mt-4 text-sm">
            <p className="font-medium mb-1">GM Interpretation:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>GM &gt; 0.3m: Good stability</li>
              <li>0 &lt; GM ≤ 0.3m: Marginal stability</li>
              <li>GM = 0: Neutral stability</li>
              <li>GM &lt; 0: Unstable condition</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StabilityCheckPage;