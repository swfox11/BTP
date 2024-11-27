'use client';

import { useState } from 'react';

const StabilityCheckPage = () => {
  const [depth, setDepth] = useState<string>(''); // d
  const [breadth, setBreadth] = useState<string>(''); // B
  const [draught, setDraught] = useState<string>(''); // T
  const [kg, setKg] = useState<string>(''); // KG

  const [km, setKm] = useState<number | null>(null); // KM
  const [gm, setGm] = useState<number | null>(null); // GM
  const [stability, setStability] = useState<string | null>(null); // Stability Status

  const calculateStability = () => {
    const d = parseFloat(depth);
    const B = parseFloat(breadth);
    const T = parseFloat(draught);
    const KG = parseFloat(kg);

    if (!isNaN(d) && !isNaN(B) && !isNaN(T) && !isNaN(KG) && d > 0 && B > 0 && T > 0 && KG >= 0) {
      const KM = d / 2 + (B ** 2) / (12 * T); // Calculate KM
      const GM = KM - KG; // Calculate GM
      setKm(KM);
      setGm(GM);
      setStability(GM > 0 ? 'Stable' : 'Unstable'); // Determine stability
    } else {
      alert('Please enter valid positive numbers for depth, breadth, draught, and KG.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Check Initial Stability of Rectangular Barge</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateStability();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="depth" className="block font-semibold">
            Depth ( d ) (m):
          </label>
          <input
            type="number"
            id="depth"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter depth in meters"
          />
        </div>
        <div>
          <label htmlFor="breadth" className="block font-semibold">
            Breadth ( B ) (m):
          </label>
          <input
            type="number"
            id="breadth"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter breadth in meters"
          />
        </div>
        <div>
          <label htmlFor="draught" className="block font-semibold">
            Draught ( T ) (m):
          </label>
          <input
            type="number"
            id="draught"
            value={draught}
            onChange={(e) => setDraught(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter draught in meters"
          />
        </div>
        <div>
          <label htmlFor="kg" className="block font-semibold">
            Height of Center of Gravity (KG) (m):
          </label>
          <input
            type="number"
            id="kg"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter KG in meters"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate Stability
        </button>
      </form>

      {km !== null && gm !== null && stability !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Results:</h2>
          <p>
            ( KM ): <strong>{km.toFixed(4)} m</strong>
          </p>
          <p>
            ( GM ): <strong>{gm.toFixed(4)} m</strong>
          </p>
          <p>
            Stability Status: <strong>{stability}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default StabilityCheckPage;
