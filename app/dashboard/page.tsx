'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Game } from '../../types';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function Dashboard() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${API}/api/games`)
      .then(res => setGames(res.data))
      .catch(err => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ color: '#fff' }}>Memuat data game...</p>;

  return (
    <div>
      <h1 style={{ color: '#fff', marginBottom: 8, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>Dashboard COC</h1>
      <p style={{ color: '#eaf6ff', marginBottom: 24, fontSize: 18 }}>Pilih babak permainan:</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {games.map(g => (
          <div key={g.id} style={{ background: 'rgba(255,255,255,0.9)', borderRadius: 12, padding: 20, boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}>
            <h3 style={{ marginBottom: 8, color: '#0077c8' }}>{g.name}</h3>
            <p style={{ fontSize: 14, color: '#3a6b8a' }}>{g.desc}</p>
          </div>
        ))}
        {games.length === 0 && <p style={{ color: '#fff' }}>Gagal memuat game. Pastikan backend menyala!</p>}
      </div>
    </div>
  );
}