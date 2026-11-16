'use client';

import { Game } from '../../types';
import { Calculator, Brain, Box, Lightbulb, Puzzle } from 'lucide-react';
import Link from 'next/link'; // Import Link

const DUMMY_GAMES: Game[] = [
  { id: 'arithmetic', name: 'Arithmetic / Numerical', desc: 'Uji kecepatan berhitung dan logika numerik.' },
  { id: 'memory', name: 'Memory', desc: 'Uji daya ingat angka, simbol, dan posisi.' },
  { id: 'spatial', name: 'Spatial Reasoning', desc: 'Bayangkan objek 2D menjadi 3D dan rotasi.' },
  { id: 'logical', name: 'Logical Reasoning', desc: 'Temukan pola dan pecahkan teka-teki.' },
  { id: 'problem-solving', name: 'Problem Solving', desc: 'Susun strategi dengan batasan tertentu.' },
];

export default function Dashboard() {
  const getIcon = (id: string) => {
    switch(id) {
      case 'arithmetic': return <Calculator size={32} color="#3b82f6" />;
      case 'memory': return <Brain size={32} color="#8b5cf6" />;
      case 'spatial': return <Box size={32} color="#10b981" />;
      case 'logical': return <Lightbulb size={32} color="#f59e0b" />;
      case 'problem-solving': return <Puzzle size={32} color="#ef4444" />;
      default: return <Puzzle size={32} color="#3b82f6" />;
    }
  };

  return (
    <div>
      <h1 style={{ color: '#111827', marginBottom: 8, fontSize: '28px', fontWeight: 'bold' }}>Dashboard COC</h1>
      <p style={{ color: '#6b7280', marginBottom: 32, fontSize: 16 }}>Pilih kategori kemampuan untuk melihat daftar game:</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {DUMMY_GAMES.map(g => (
          /* Ubah div jadi Link, arahkan ke kategori masing-masing */
          <Link href={`/dashboard/category/${g.id}`} key={g.id} style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: '#ffffff', 
              borderRadius: 16, 
              padding: 24, 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              border: '1px solid #f3f4f6',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              cursor: 'pointer',
              height: '100%',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ background: '#f3f4f6', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getIcon(g.id)}
              </div>
              <div>
                <h3 style={{ marginBottom: 8, color: '#111827', fontSize: '18px', fontWeight: '600' }}>{g.name}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: '1.5' }}>{g.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}