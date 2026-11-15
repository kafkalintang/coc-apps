'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { LeaderboardEntry } from '../../../types';
import { Medal } from 'lucide-react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function Leaderboard() {
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${API}/api/leaderboard`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 style={{ color: '#111827', marginBottom: 8, fontSize: '28px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Medal color="#f59e0b" size={32} /> Papan Peringkat
      </h1>
      <p style={{ color: '#6b7280', marginBottom: 32 }}>Lihat siapa yang paling jago di COC Apps.</p>

      {loading ? (
        <p style={{ color: '#6b7280' }}>Memuat peringkat...</p>
      ) : (
        <div style={{ background: '#ffffff', borderRadius: 12, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '16px 24px', color: '#374151', fontWeight: '600' }}>Peringkat</th>
                <th style={{ padding: '16px 24px', color: '#374151', fontWeight: '600' }}>Nama Pemain</th>
                <th style={{ padding: '16px 24px', color: '#374151', fontWeight: '600' }}>Skor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 'bold', color: i === 0 ? '#f59e0b' : '#6b7280' }}>#{i + 1}</td>
                  <td style={{ padding: '16px 24px', fontWeight: '500' }}>{row.name}</td>
                  <td style={{ padding: '16px 24px', color: '#3b82f6', fontWeight: 'bold' }}>{row.score}</td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: '24px', textAlign: 'center', color: '#6b7280' }}>Belum ada data peringkat.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}