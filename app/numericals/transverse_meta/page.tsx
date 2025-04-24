'use client';

import { useState } from 'react';

const TransverseMetacentricRadiusPage = () => {
  const [breadth, setBreadth] = useState<string>('');
  const [draught, setDraught] = useState<string>('');
  const [transverseRadius, setTransverseRadius] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateTransverseMetacentricRadius = () => {
    // Reset previous results and errors
    setTransverseRadius(null);
    setError(null);

    const B = parseFloat(breadth);
    const T = parseFloat(draught);

    // Validate inputs
    if (!breadth || !draught) {
      setError('Both fields are required');
      return;
    }
    if (isNaN(B)) {
      setError('Breadth must be a valid number');
      return;
    }
    if (isNaN(T)) {
      setError('Draught must be a valid number');
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

    // Calculation
    const BM = (B ** 2) / (12 * T);
    setTransverseRadius(BM);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Transverse Metacentric Radius (BM) Calculator</h1>
      
      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Formula</h2>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-lg bg-gray-100 p-2 rounded">
              BM = B² / (12 × T)
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-100 p-1 rounded">B = Breadth (m)</div>
              <div className="bg-gray-100 p-1 rounded">T = Draught (m)</div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          BM represents the distance between the center of buoyancy and the metacenter.
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateTransverseMetacentricRadius();
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
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate BM
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {transverseRadius !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Result</h2>
          <div className="mt-2 flex items-baseline">
            <span className="text-lg font-medium mr-2">Transverse Metacentric Radius:</span>
            <span className="text-2xl font-bold">{transverseRadius.toFixed(4)} m</span>
          </div>
          
          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Significance:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Larger BM indicates greater initial stability</li>
              <li>Smaller BM makes the vessel more tender (less stable)</li>
              <li>Typical values range from 0.5m to 5m depending on vessel size</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransverseMetacentricRadiusPage;