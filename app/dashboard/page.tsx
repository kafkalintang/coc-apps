'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Game } from '../../types';
import { Calculator, Brain, Box, Zap } from 'lucide-react'; // Ikon untuk game

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

  // Fungsi buat milih ikon berdasarkan id game dari backend
  const getIcon = (id: string) => {
    switch(id) {
      case 'hitungan': return <Calculator size={32} color="#3b82f6" />;
      case 'ingatan': return <Brain size={32} color="#8b5cf6" />;
      case 'spasial': return <Box size={32} color="#10b981" />;
      case 'cepat': return <Zap size={32} color="#f59e0b" />;
      default: return <Zap size={32} color="#3b82f6" />;
    }
  };

  if (loading) return <p style={{ color: '#6b7280' }}>Memuat data game...</p>;

  return (
    <div>
      <h1 style={{ color: '#111827', marginBottom: 8, fontSize: '28px', fontWeight: 'bold' }}>Dashboard COC</h1>
      <p style={{ color: '#6b7280', marginBottom: 32, fontSize: 16 }}>Pilih babak permainan untuk mulai menguji kemampuanmu:</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
        {games.map(g => (
          <div key={g.id} style={{ 
            background: '#ffffff', 
            borderRadius: 16, 
            padding: 24, 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            border: '1px solid #f3f4f6',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{ background: '#f3f4f6', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {getIcon(g.id)}
            </div>
            <div>
              <h3 style={{ marginBottom: 8, color: '#111827', fontSize: '18px', fontWeight: '600' }}>{g.name}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: '1.5' }}>{g.desc}</p>
            </div>
          </div>
        ))}
        {games.length === 0 && <p style={{ color: '#ef4444', fontWeight: '500' }}>Gagal memuat game. Pastikan backend menyala!</p>}
      </div>
    </div>
  );
}