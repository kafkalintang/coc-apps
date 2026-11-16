'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Timer, ArrowLeft, BookOpen, X } from 'lucide-react';

const GAMES = [
  { 
    id: 'shuffle', 
    name: 'Shuffle & Recall', 
    desc: 'Hafalkan susunan kartu remi, lalu susun ulang di Adapto X.', 
    duration: '30 menit', 
    url: '/dashboard/play?type=shuffle',
    imageBg: '/remi.jpg', 
    tutorialImg: '/tutor-card.jpg',
  },
  { 
    id: 'lips', 
    name: 'Lips Recall', 
    desc: 'Ingat urutan 1-64 bibir, lalu urutkan di Adapto X.', 
    duration: '30 menit', 
    url: '/dashboard/play?type=lips',
    imageBg: '/lips.jpg', 
    tutorialImg: '/tutor-lips.jpg',
  }
];

export default function MemoryCategoryPage() {
  const [activeTutorial, setActiveTutorial] = useState<string | null>(null);

  return (
    <div>
      <Link href="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6b7280', marginBottom: '24px', fontWeight: '600', textDecoration: 'none' }}>
        <ArrowLeft size={20} /> Kembali ke Dashboard
      </Link>

      <h1 style={{ color: '#111827', marginBottom: 8, fontSize: '28px', fontWeight: 'bold' }}>
        Game MEMORY
      </h1>
      <p style={{ color: '#6b7280', marginBottom: 32 }}>Pilih tantangan yang ingin kamu mainkan:</p>

      {/* GRID KARTU GAME */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
        {GAMES.map((game, index) => (
          <div 
            key={game.id} 
            className="animate-card card-container"
            style={{ 
              animationDelay: `${index * 0.15}s`,
              position: 'relative',
              borderRadius: 20, 
              overflow: 'hidden',
              height: '400px', 
              boxShadow: '0 8px 16px -4px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 25px 30px -10px rgba(59, 130, 246, 0.4)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.2)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            {/* GAMBAR PENUH DENGAN EFEK ZOOM */}
            <div 
              className="card-image"
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `url(${game.imageBg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundColor: '#1f2937'
              }} 
            />

            {/* OVERLAY GELAP */}
            <div style={{ 
              position: 'absolute', inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px'
            }}>
              
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ marginBottom: 8, color: '#ffffff', fontSize: '24px', fontWeight: '800', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  {game.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: '1.5', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  {game.desc}
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fca5a5', fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
                <Timer size={16} /> {game.duration}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                {/* Tombol Cara Bermain */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setActiveTutorial(game.id); }}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.9)', color: '#111827', border: 'none', padding: '12px 16px', borderRadius: '10px', 
                    display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '700', flex: 1, justifyContent: 'center',
                    transition: 'all 0.2s', fontSize: '15px', backdropFilter: 'blur(4px)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <BookOpen size={18} /> Cara Main
                </button>
                
                {/* Tombol Mainkan */}
                <Link href={game.url} style={{ 
                  background: '#3b82f6', color: 'white', border: 'none', padding: '12px 16px', borderRadius: '10px', 
                  display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '700', textDecoration: 'none', flex: 1, justifyContent: 'center',
                  transition: 'all 0.2s', fontSize: '15px', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <Play size={18} fill="currentColor" /> Mainkan
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* POP-UP (MODAL) CARA BERMAIN */}
      {activeTutorial && (() => {
        const gameData = GAMES.find(g => g.id === activeTutorial);
        if (!gameData) return null;

        return (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(15, 23, 42, 0.6)', zIndex: 50, backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
          }}>
            <div 
              className="animate-modal"
              style={{ 
                background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '600px', maxHeight: '90vh', 
                display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', margin: 0 }}>
                  Cara Bermain: {gameData.name}
                </h2>
                <button onClick={() => setActiveTutorial(null)} style={{ background: '#f3f4f6', border: 'none', cursor: 'pointer', color: '#4b5563', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'} onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '24px', overflowY: 'auto' }}>
                {/* --- INI BAGIAN YANG DIPERBAIKI --- */}
                {/* Kita kunci tingginya jadi 250px, dan gambarnya di-cover biar proporsional */}
                <div style={{ 
                  width: '100%', 
                  height: '250px', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  marginBottom: '24px', 
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#f3f4f6'
                }}>
                  <img 
                    src={gameData.tutorialImg} 
                    alt="Tutorial" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/600x300?text=Gambar+Tutorial+Belum+Ada'}
                  />
                </div>
                {/* ---------------------------------- */}
                
                <div style={{ color: '#374151', lineHeight: '1.7', fontSize: '15px' }}>
                  <p style={{ marginBottom: '12px' }}><strong>1. Fase Hafalan:</strong> Kamu akan diberi waktu 30 menit untuk menghafal susunan gambar yang muncul di layar.</p>
                  <p style={{ marginBottom: '12px' }}><strong>2. Adapto X:</strong> Setelah klik "Saya Sudah Hafal", gambar akan diacak. Kamu harus mengklik gambar tersebut sesuai urutan aslinya.</p>
                  <p><strong>3. Evaluasi:</strong> Klik tombol Submit untuk melihat berapa banyak gambar yang berhasil kamu urutkan dengan benar.</p>
                </div>
              </div>

              <div style={{ padding: '20px 24px', borderTop: '1px solid #e5e7eb', textAlign: 'right' }}>
                <button onClick={() => setActiveTutorial(null)} style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.background = '#3b82f6'}>
                  Saya Paham
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}