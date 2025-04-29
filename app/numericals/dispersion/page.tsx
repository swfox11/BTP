'use client';

import { useState } from 'react';
import * as math from 'mathjs';

const WaveDispersionPage = () => {
  const [wavelength, setWavelength] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [results, setResults] = useState<{
    wavenumber: number;
    frequency: number;
    period: number;
    isDeepWater: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Constants
  const GRAVITY = 9.81; // m/s²

  const calculateDispersion = () => {
    // Reset states
    setResults(null);
    setError(null);

    // Validate inputs
    const L = parseFloat(wavelength);
    const h = parseFloat(depth);

    if (!wavelength || !depth) {
      setError('Both fields are required');
      return;
    }
    if (isNaN(L) || L <= 0) {
      setError('Wavelength must be a positive number');
      return;
    }
    if (isNaN(h) || h < 0) {
      setError('Depth must be a non-negative number');
      return;
    }

    try {
      // Calculate wavenumber (k = 2π/L)
      const k = (2 * Math.PI) / L;

      // Calculate angular frequency (ω) using dispersion relation: ω² = gk*tanh(kh)
      const kh = k * h;
      const omegaSquared = GRAVITY * k * Math.tanh(kh);
      const omega = Math.sqrt(omegaSquared);

      // Calculate wave period (T = 2π/ω)
      const T = (2 * Math.PI) / omega;

      // Check water depth classification (h/L > 0.5 is deep water)
      const isDeepWater = h / L > 0.5;

      setResults({
        wavenumber: k,
        frequency: omega,
        period: T,
        isDeepWater,
      });
    } catch (err) {
      setError('Calculation error. Please check inputs.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Wave Dispersion Calculator</h1>
      
      {/* Theory Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Dispersion Relation</h2>
        <div className="flex flex-col items-center">
          <p className="font-mono text-lg bg-gray-100 p-2 rounded mb-2">
            ω² = gk tanh(kh)
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm w-full">
            <div className="bg-gray-100 p-2 rounded">ω = Angular frequency (rad/s)</div>
            <div className="bg-gray-100 p-2 rounded">g = Gravity (9.81 m/s²)</div>
            <div className="bg-gray-100 p-2 rounded">k = Wavenumber (2π/λ)</div>
            <div className="bg-gray-100 p-2 rounded">h = Water depth (m)</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          This relation describes how waves of different wavelengths travel at different speeds in water of varying depths.
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateDispersion();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Wavelength (L) in meters:
          </label>
          <input
            type="number"
            value={wavelength}
            onChange={(e) => setWavelength(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0.1"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Water Depth (h) in meters:
          </label>
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate Wave Properties
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {results && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Wave Properties</h2>
          
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Wavenumber (k)</p>
              <p className="text-lg font-mono font-bold">{results.wavenumber.toFixed(4)} rad/m</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Angular Frequency (ω)</p>
              <p className="text-lg font-mono font-bold">{results.frequency.toFixed(4)} rad/s</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Wave Period (T)</p>
              <p className="text-lg font-mono font-bold">{results.period.toFixed(2)} seconds</p>
            </div>
            <div className={`p-3 rounded ${
              results.isDeepWater ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              <p className="text-sm font-medium">Water Depth Classification:</p>
              <p className="font-semibold">
                {results.isDeepWater ? 'Deep Water (h/λ > 0.5)' : 'Shallow/Intermediate Water (h/λ ≤ 0.5)'}
              </p>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Key Relationships:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Wave speed (c) = λ/T ≈ {((parseFloat(wavelength)/results.period).toFixed(2))} m/s</li>
              <li>Deep water approximation (λ/L {'>'} 0.5): ω² ≈ gk</li>
              <li>Shallow water approximation (λ/L {'<'} 0.05): ω² ≈ ghk²</li>
            </ul>
          </div>
        </div>
      )}

      {/* Additional Resources */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2">About Wave Dispersion</h3>
        <p className="text-sm text-gray-600">
          Longer waves travel faster than shorter ones (dispersion). In deep water, wave speed depends only on wavelength. 
          In shallow water, speed depends on depth.
        </p>
      </div>
    </div>
  );
};

export default WaveDispersionPage;