'use client';

import { useState } from 'react';

const StratificationParameterPage = () => {
  // Input states
  const [heatFlux, setHeatFlux] = useState<string>(''); // ∂Q/∂t in W/m²
  const [depth, setDepth] = useState<string>(''); // h in meters
  const [velocity, setVelocity] = useState<string>(''); // u in m/s
  const [efficiency, setEfficiency] = useState<string>(''); // ε (0-1)
  
  // Results
  const [stratificationParam, setStratificationParam] = useState<number | null>(null);
  const [isStratified, setIsStratified] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Constants
  const constants = {
    α: 2.0e-4,   // Thermal expansion coefficient (K⁻¹)
    g: 9.81,     // Gravity (m/s²)
    c: 4186,     // Specific heat capacity (J/kg·K)
    ρ: 1025,     // Seawater density (kg/m³)
    C_d: 0.003   // Drag coefficient
  };

  const calculateStratification = () => {
    // Reset states
    setStratificationParam(null);
    setIsStratified(null);
    setError(null);

    // Parse inputs
    const hf = parseFloat(heatFlux);
    const h = parseFloat(depth);
    const u = parseFloat(velocity);
    const ε = parseFloat(efficiency);

    // Validate inputs
    if (isNaN(hf)) {
      setError('Heat flux must be a valid number');
      return;
    }
    if (isNaN(h) || h <= 0) {
      setError('Depth must be positive');
      return;
    }
    if (isNaN(u) || u <= 0) {
      setError('Velocity must be positive');
      return;
    }
    if (isNaN(ε) || ε <= 0 || ε > 1) {
      setError('Efficiency must be between 0 and 1');
      return;
    }

    try {
      // Full stratification parameter formula
      const numerator = hf * constants.α * constants.g * h;
      const denominator = 2 * constants.c * ε * constants.ρ * constants.C_d * Math.pow(u, 3);
      const S = numerator / denominator;

      setStratificationParam(S);
      setIsStratified(S > 1);
    } catch (err) {
      setError('Calculation error. Please check inputs.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Stratification Parameter Calculator</h1>
      
      {/* Formula Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Full Stratification Formula</h2>
        <div className="overflow-x-auto">
          <p className="font-mono text-lg bg-gray-100 p-2 rounded mb-2 whitespace-nowrap">
            S = [∂Q/∂t · α · g · h] / [2 · c · ε · ρ · C_d · u³]
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div className="bg-gray-100 p-2 rounded">∂Q/∂t = Heat flux (W/m²)</div>
          <div className="bg-gray-100 p-2 rounded">α = {constants.α.toExponential(2)} K⁻¹</div>
          <div className="bg-gray-100 p-2 rounded">g = {constants.g} m/s²</div>
          <div className="bg-gray-100 p-2 rounded">h = Depth (m)</div>
          <div className="bg-gray-100 p-2 rounded">c = {constants.c} J/kg·K</div>
          <div className="bg-gray-100 p-2 rounded">ε = Mixing efficiency</div>
          <div className="bg-gray-100 p-2 rounded">ρ = {constants.ρ} kg/m³</div>
          <div className="bg-gray-100 p-2 rounded">C_d = {constants.C_d}</div>
          <div className="bg-gray-100 p-2 rounded">u = Velocity (m/s)</div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={(e) => { e.preventDefault(); calculateStratification(); }} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Heat Flux (∂Q/∂t) (W/m²):
          </label>
          <input
            type="number"
            value={heatFlux}
            onChange={(e) => setHeatFlux(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="1"
            min="0"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Water Depth (h) (m):
          </label>
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0.1"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Tidal Velocity (u) (m/s):
          </label>
          <input
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.01"
            min="0.01"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Mixing Efficiency (ε):
          </label>
          <input
            type="number"
            value={efficiency}
            onChange={(e) => setEfficiency(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.01"
            min="0.01"
            max="1"
          />
          <p className="text-xs text-gray-500 mt-1">Range: 0.01-1 (typically 0.05-0.2 for tidal mixing)</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate Stratification
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {stratificationParam !== null && (
        <div className="mt-6 p-4 rounded-lg border" style={{
          backgroundColor: isStratified ? '#EFF6FF' : '#F0FDF4',
          borderColor: isStratified ? '#93C5FD' : '#BBF7D0'
        }}>
          <h2 className="text-xl font-semibold" style={{ color: isStratified ? '#1E40AF' : '#166534' }}>
            {isStratified ? 'Stratified System' : 'Well-Mixed System'}
          </h2>
          
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Stratification Parameter (S)</p>
              <p className="text-lg font-mono font-bold">{stratificationParam.toFixed(4)}</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Critical Threshold</p>
              <p className="text-lg font-bold">S {isStratified ? '>' : '<'} 1</p>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Physical Meaning:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              {isStratified ? (
                <>
                  <li>Surface heating dominates over mixing</li>
                  <li>Expect distinct layers with different properties</li>
                  <li>Common in summer or low-tide conditions</li>
                </>
              ) : (
                <>
                  <li>Tidal mixing dominates over heating</li>
                  <li>Water column properties are uniform</li>
                  <li>Common in winter or high-tide conditions</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Theory Section */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Key Concepts</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>S {'>'} 1</strong>: Heating effects dominate → <span className="text-blue-600">Stratified</span><br />
            <strong>S {'<'} 1</strong>: Mixing dominates → <span className="text-green-600">Well-Mixed</span>
          </p>
          <p>
            The parameter compares surface heating (stabilizing) vs. tidal mixing (destabilizing) effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StratificationParameterPage;