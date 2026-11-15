'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { LeaderboardEntry } from '@/types'; // Import tipe data

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Leaderboard() {
  // Tambahkan <LeaderboardEntry[]>
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${API}/api/leaderboard`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ color: '#fff', marginBottom: 16, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>Papan Peringkat</h1>

      {loading ? (
        <p style={{ color: '#fff' }}>Memuat peringkat...</p>
      ) : (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
        }}>
          <thead>
            <tr style={{ background: '#0077c8', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: 16 }}>Peringkat</th>
              <th style={{ padding: 16 }}>Nama Pemain</th>
              <th style={{ padding: 16 }}>Skor</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={row.id} style={{ borderBottom: '1px solid #d7ebf7' }}>
                <td style={{ padding: 16, fontWeight: 'bold' }}>#{i + 1}</td>
                <td style={{ padding: 16 }}>{row.name}</td>
                <td style={{ padding: 16, color: '#0077c8', fontWeight: 'bold' }}>{row.score}</td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={3} style={{ padding: 16, textAlign: 'center' }}>Belum ada data peringkat.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: 24 }}>
        <Link href="/dashboard" style={{ 
          color: '#fff', 
          fontWeight: 'bold',
          background: 'rgba(0,0,0,0.2)',
          padding: '10px 20px',
          borderRadius: 8,
        }}>
          ← Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}