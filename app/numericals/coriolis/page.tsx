'use client';

import { useState } from 'react';

const CoriolisPeriodPage = () => {
  const [latitude, setLatitude] = useState<string>('');
  const [results, setResults] = useState<{
    coriolisParameter: number;
    period: number;
    periodHours: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Constants
  const EARTH_ANGULAR_VELOCITY = 7.2921e-5; // Earth's angular velocity in rad/s

  const calculatePeriod = () => {
    // Reset states
    setResults(null);
    setError(null);

    // Validate input
    const lat = parseFloat(latitude);

    if (!latitude) {
      setError('Latitude is required');
      return;
    }
    if (isNaN(lat)) {
      setError('Latitude must be a valid number');
      return;
    }
    if (lat < -90 || lat > 90) {
      setError('Latitude must be between -90° and 90°');
      return;
    }

    try {
      // Calculate Coriolis parameter (f = 2Ωsinφ)
      const phiRad = (lat * Math.PI) / 180; // Convert to radians
      const f = 2 * EARTH_ANGULAR_VELOCITY * Math.sin(phiRad);

      // Calculate period (T = 2π/f)
      const period = (2 * Math.PI) / Math.abs(f); // Absolute value since period is always positive
      const periodHours = period / 3600; // Convert to hours

      setResults({
        coriolisParameter: f,
        period,
        periodHours,
      });
    } catch (err) {
      setError('Calculation error. Please check input.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Buoy Oscillation Period (Coriolis Effect)</h1>
      
      {/* Theory Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Physical Principle</h2>
        <div className="flex flex-col items-center">
          <p className="font-mono text-lg bg-gray-100 p-2 rounded mb-2">
            T = 2π / |f| <span className="text-sm">where</span> f = 2Ωsinφ
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm w-full mt-2">
            <div className="bg-gray-100 p-2 rounded">T = Inertial period (s)</div>
            <div className="bg-gray-100 p-2 rounded">Ω = 7.2921×10⁻⁵ rad/s</div>
            <div className="bg-gray-100 p-2 rounded">f = Coriolis parameter</div>
            <div className="bg-gray-100 p-2 rounded">φ = Latitude (°)</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          This is the period of circular motion for a buoy or water parcel under Earth&apos;s rotation (inertial oscillations).
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculatePeriod();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Latitude (φ) in degrees:
          </label>
          <div className="relative">
            <input
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              step="0.1"
              min="-90"
              max="90"
              placeholder="e.g., 45 for 45°N"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">°</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Range: -90° (South Pole) to 90° (North Pole)</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate Oscillation Period
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
          <h2 className="text-xl font-semibold text-green-800">Results</h2>
          
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Coriolis Parameter (f)</p>
              <p className="text-lg font-mono font-bold">{results.coriolisParameter.toExponential(4)} rad/s</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-500">Inertial Period</p>
              <p className="text-lg font-mono font-bold">{results.period.toFixed(0)} seconds</p>
            </div>
            <div className="col-span-2 bg-blue-100 p-3 rounded">
              <p className="text-sm text-gray-700">Human-Readable Period:</p>
              <p className="text-xl font-bold text-blue-800">
                {Math.floor(results.periodHours)} hours {Math.round((results.periodHours % 1) * 60)} minutes
              </p>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Key Observations:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>At poles (φ = ±90°): Period ≈ <strong>12 hours</strong> (minimum)</li>
              <li>At equator (φ = 0°): Period → ∞ (no inertial oscillations)</li>
              <li>Mid-latitudes (φ = 45°): Period ≈ <strong>16.9 hours</strong></li>
            </ul>
          </div>
        </div>
      )}

      {/* Practical Implications */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Oceanographic Significance</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>Inertial oscillations</strong> are circular motions of water parcels caused by Earth&apos;s rotation.
            They are frequently observed in ocean current measurements.
          </p>
          <p>
            The period determines how often a buoy completes a full circular motion under the Coriolis force alone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoriolisPeriodPage;