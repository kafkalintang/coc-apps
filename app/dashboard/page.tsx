'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Game } from '../../types';

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Dashboard() {
  // Tambahkan <Game[]> agar TS tahu ini array of Game
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${API}/api/games`)
      .then(res => setGames(res.data))
      .catch(err => console.error("Error mengambil data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ padding: 24, color: '#fff', textAlign: 'center', marginTop: 50 }}>Memuat data game...</p>;
  }

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ color: '#fff', marginBottom: 8, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>Dashboard COC</h1>
      <p style={{ color: '#eaf6ff', marginBottom: 24, fontSize: 18 }}>
        Pilih babak permainan:
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
      }}>
        {games.map(g => (
          <div key={g.id} style={{
            background: 'rgba(255,255,255,0.9)',
            borderRadius: 12,
            padding: 20,
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s',
          }}>
            <h3 style={{ marginBottom: 8, color: '#0077c8' }}>{g.name}</h3>
            <p style={{ fontSize: 14, color: '#3a6b8a' }}>{g.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <Link href="/dashboard/leaderboard" style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18,
          textDecoration: 'underline',
          background: 'rgba(0,0,0,0.2)',
          padding: '10px 20px',
          borderRadius: 8,
        }}>
          Lihat Papan Peringkat →
        </Link>
      </div>
    </div>
  );
}