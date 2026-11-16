'use client';

import { use } from 'react';
import Link from 'next/link';
import { Play, Timer, ArrowLeft } from 'lucide-react';

// Simulasi data game berdasarkan kategori
const GAMES_BY_CATEGORY: Record<string, any[]> = {
  arithmetic: [
    { id: 'ketik-cepat', name: 'Ketik Cepat', desc: 'Jawab soal matematika dengan mengetik angkanya.', duration: '60 detik' },
    { id: 'pilihan-ganda', name: 'Pilihan Ganda', desc: 'Pilih satu jawaban yang paling benar.', duration: '45 detik' },
    { id: 'benar-salah', name: 'Benar / Salah', desc: 'Cek apakah persamaan matematika ini benar.', duration: '30 detik' },
    { id: 'urutkan-angka', name: 'Urutkan Angka', desc: 'Klik angka dari yang terkecil ke terbesar.', duration: '40 detik' },
    { id: 'hitung-pola', name: 'Hitung Pola', desc: 'Tebak angka selanjutnya dari pola yang ada.', duration: '60 detik' },
  ],
  memory: [
    { id: 'ingat-kartu', name: 'Ingat Kartu', desc: 'Temukan pasangan kartu yang sama.', duration: '90 detik' }
  ]
};

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params (Next.js 15)
  const resolvedParams = use(params);
  const categoryId = resolvedParams.id;

  // Ambil game sesuai kategori, kalau ga ada default ke array kosong
  const games = GAMES_BY_CATEGORY[categoryId] || [];
  const categoryName = categoryId.replace('-', ' ').toUpperCase();

  return (
    <div>
      <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', marginBottom: '24px', fontWeight: '500' }}>
        <ArrowLeft size={20} /> Kembali ke Dashboard
      </Link>

      <h1 style={{ color: '#111827', marginBottom: 8, fontSize: '28px', fontWeight: 'bold' }}>
        Game {categoryName}
      </h1>
      <p style={{ color: '#6b7280', marginBottom: 32 }}>Pilih tantangan yang ingin kamu mainkan:</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {games.map((game) => (
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
              {/* Nanti ini diarahkan ke halaman permainannya */}
              <button style={{ 
                marginLeft: 'auto', background: '#3b82f6', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', 
                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '500' 
              }}>
                <Play size={16} /> Mainkan
              </button>
            </div>
          </div>
        ))}

        {games.length === 0 && (
          <p style={{ color: '#6b7280' }}>Game untuk kategori ini belum tersedia.</p>
        )}
      </div>
    </div>
  );
}