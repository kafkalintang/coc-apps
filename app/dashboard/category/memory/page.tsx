'use client';

import Link from 'next/link';
import { Play, Timer, ArrowLeft } from 'lucide-react';

// Data game khusus kategori Memory
const GAMES = [
  { id: 'shuffle', name: 'Shuffle & Recall', desc: 'Hafalkan susunan kartu remi, lalu susun ulang di Adapto X.', duration: '30 menit', url: '/dashboard/play?type=shuffle' },
  { id: 'lips', name: 'Lips Recall', desc: 'Ingat urutan 1-64 bibir, lalu urutkan di Adapto X.', duration: '30 menit', url: '/dashboard/play?type=lips' }
];

export default function MemoryCategoryPage() {
  return (
    <div>
      <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', marginBottom: '24px', fontWeight: '500' }}>
        <ArrowLeft size={20} /> Kembali ke Dashboard
      </Link>

      <h1 style={{ color: '#111827', marginBottom: 8, fontSize: '28px', fontWeight: 'bold' }}>
        Game MEMORY
      </h1>
      <p style={{ color: '#6b7280', marginBottom: 32 }}>Pilih tantangan yang ingin kamu mainkan:</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {GAMES.map((game) => (
          <div key={game.id} style={{ 
            background: '#ffffff', borderRadius: 12, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex', flexDirection: 'column', gap: '16px'
          }}>
            <div>
              <h3 style={{ marginBottom: 8, color: '#111827', fontSize: '20px', fontWeight: '600' }}>{game.name}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: '1.5' }}>{game.desc}</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontSize: '14px', fontWeight: '500' }}>
                <Timer size={16} /> {game.duration}
              </div>
              
              <Link href={game.url} style={{ 
                marginLeft: 'auto', background: '#3b82f6', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', 
                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '500', textDecoration: 'none'
              }}>
                <Play size={16} /> Mainkan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}