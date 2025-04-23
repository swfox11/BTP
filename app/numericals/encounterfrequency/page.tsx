"use client";
import { useState, useEffect } from 'react';
import * as math from 'mathjs';

export default function EncounterFrequencyCalculator() {
  // Input states
  const [waveFreq, setWaveFreq] = useState<string>('0.8');
  const [vesselSpeed, setVesselSpeed] = useState<string>('10');
  const [headingAngle, setHeadingAngle] = useState<string>('0');
  const [results, setResults] = useState<{omegaE: number; scenario: string} | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Constants
  const GRAVITY = 9.81;
  const SCENARIOS = {
    0: 'Head Seas (0°)',
    90: 'Beam Seas (90°)',
    180: 'Following Seas (180°)',
    default: 'Oblique Seas'
  };

  // Edge case validation
  const validateInputs = () => {
    const inputs = [
      { value: waveFreq, name: 'Wave frequency' },
      { value: vesselSpeed, name: 'Vessel speed' },
      { value: headingAngle, name: 'Heading angle' }
    ];

    for (const input of inputs) {
      if (!input.value.trim()) {
        setError(`${input.name} cannot be empty`);
        return false;
      }

      const numValue = parseFloat(input.value);
      if (isNaN(numValue)) {
        setError(`${input.name} must be a valid number`);
        return false;
      }

      // Specific constraints
      if (input.name === 'Wave frequency' && numValue <= 0) {
        setError('Wave frequency must be positive');
        return false;
      }

      if (input.name === 'Heading angle' && (numValue < 0 || numValue > 360)) {
        setError('Heading angle must be between 0° and 360°');
        return false;
      }
    }

    setError(null);
    return true;
  };

  // Core calculation with edge case handling
  const calculateEncounterFrequency = () => {
    if (!validateInputs()) return;

    try {
      const ω = parseFloat(waveFreq);
      const U = parseFloat(vesselSpeed);
      const β = parseFloat(headingAngle);

      // Convert degrees to radians for math
      const βRad = math.unit(β, 'deg').toNumber('rad');

      // Main calculation
      const term = (ω ** 2 / GRAVITY) * U * math.cos(βRad);
      const ω_e = ω - term;

      // Determine scenario
      let scenario;
      if (β === 0) scenario = SCENARIOS[0];
      else if (β === 90) scenario = SCENARIOS[90];
      else if (β === 180) scenario = SCENARIOS[180];
      else scenario = SCENARIOS.default;

      setResults({ omegaE: ω_e, scenario });
    } catch (err) {
      setError('Calculation error. Check input values.');
    }
  };

  // Reset all fields
  const resetCalculator = () => {
    setWaveFreq('0.8');
    setVesselSpeed('10');
    setHeadingAngle('0');
    setResults(null);
    setError(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Wave Encounter Frequency Calculator
      </h1>

      {/* Input Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Wave Frequency (ω, rad/s)
          </label>
          <input
            type="number"
            value={waveFreq}
            onChange={(e) => setWaveFreq(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0.1"
          />
          <p className="text-xs text-gray-500 mt-1">Typical range: 0.1 - 2.0 rad/s</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vessel Speed (U, m/s)
          </label>
          <input
            type="number"
            value={vesselSpeed}
            onChange={(e) => setVesselSpeed(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.5"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Wave Heading Angle (β, degrees)
          </label>
          <input
            type="number"
            value={headingAngle}
            onChange={(e) => setHeadingAngle(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            min="0"
            max="360"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0° = Head Seas</span>
            <span>90° = Beam Seas</span>
            <span>180° = Following Seas</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={calculateEncounterFrequency}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calculate
        </button>
        <button
          onClick={resetCalculator}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Reset
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-3 mb-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {results && (
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Results</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Encounter Frequency (ωₑ)</p>
              <p className="text-2xl font-mono font-bold">
                {results.omegaE.toFixed(4)} rad/s
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Scenario</p>
              <p className="text-lg font-semibold">{results.scenario}</p>
            </div>
          </div>

          {/* Interpretation
          <div className="mt-4 p-3 bg-white rounded">
            <h3 className="font-medium mb-1">Interpretation:</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {results.omegaE > parseFloat(waveFreq) ? (
                <li>Higher encounter frequency → Increased wave impacts (head seas)</li>
              ) : results.omegaE < parseFloat(waveFreq) ? (
                <li>Lower encounter frequency → Risk of parametric resonance (following seas)</li>
              ) : (
                <li>Equal to wave frequency → Beam seas condition</li>
              )}
              {Math.abs(results.omegaE) < 0.1 && (
                <li className="text-red-600">Warning: Very low encounter frequency may lead to synchronous rolling</li>
              )}
            </ul>
          </div> */}
        </div>
      )}

      {/* Theory Section */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold mb-3">Theory</h2>
        <div className="prose prose-sm max-w-none">
          <p>The encounter frequency is calculated using:</p>
          <div className="bg-gray-100 p-3 rounded overflow-x-auto">
            <code className="text-sm">
              ωₑ = ω - (ω²/g) * U * cos(β)
            </code>
          </div>
          <p>Where:</p>
          <ul className="list-disc pl-5">
            <li><strong>ωₑ</strong>: Encounter frequency (rad/s)</li>
            <li><strong>ω</strong>: Wave frequency (rad/s)</li>
            <li><strong>U</strong>: Vessel speed (m/s)</li>
            <li><strong>β</strong>: Relative wave heading angle (degrees)</li>
            <li><strong>g</strong>: Gravitational acceleration (9.81 m/s²)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}