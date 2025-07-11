"use client"
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });

      if (!res.ok) throw new Error('API Error');

      const data = await res.json();
      console.log(data);
      setResult(data);
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-blue-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-slate-900 shadow-md p-6 rounded-xl space-y-4 my-auto text-white">
        <h1 className="text-xl font-semibold text-center">Emotion Reflection</h1>
        <textarea
          className="w-full border rounded-md p-2 resize-none text-white"
          placeholder="Write how you feel..."
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
        {result && (
          <div className="mt-4 p-4 bg-violet-300 border border-violet-400 rounded-md text-black">
            {
              Object.keys(result).map((key) => {
                  return (
                    <p key={key}><strong className='capitalize'>{key}:</strong> {result[key]}</p>
                  )
              })
            }
          </div>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
}
