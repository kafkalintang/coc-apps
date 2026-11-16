'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Timer, CheckCircle2, XCircle } from 'lucide-react';

export default function LipsRecall() {
  const [phase, setPhase] = useState<'memorize' | 'recall' | 'result'>('memorize');
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 menit
  const [score, setScore] = useState(0);
  
  const totalItems = 64;
  const [lipsOrder, setLipsOrder] = useState<number[]>([]);
  const [displayOrder, setDisplayOrder] = useState<number[]>([]);
  const [userAnswer, setUserAnswer] = useState<number[]>([]);

  // Inisialisasi awal
  useEffect(() => {
    const items = Array.from({ length: totalItems }, (_, i) => i + 1);
    const randomized = [...items].sort(() => Math.random() - 0.5);
    setLipsOrder(randomized);
    setDisplayOrder(randomized);
  }, []);

  // Timer
  useEffect(() => {
    if (phase === 'result' || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { setPhase('result'); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, phase]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleNextPhase = () => {
    setPhase('recall');
    setDisplayOrder([...displayOrder].sort(() => Math.random() - 0.5));
    setUserAnswer([]);
  };

  const handleSelectItem = (item: number) => {
    if (phase !== 'recall') return;
    if (userAnswer.includes(item)) setUserAnswer(userAnswer.filter((i) => i !== item));
    else setUserAnswer([...userAnswer, item]);
  };

  const handleSubmitRecall = () => {
    let correctCount = 0;
    for (let i = 0; i < totalItems; i++) {
      if (userAnswer[i] === lipsOrder[i]) correctCount++;
    }
    setScore(correctCount);
    setPhase('result');
  };

  const renderImage = (itemNumber: number) => {
    const numPad = itemNumber.toString().padStart(2, '0');
    const fileName = `/lips/bibir_${numPad}.jpg`;
    
    return <img src={fileName} alt={`Bibir ${itemNumber}`} style={{ height: '60px', width: '100%', objectFit: 'contain', marginBottom: '4px' }} onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/60?text=?'; }} />;
  };

  // --- RENDER UI ---
  if (phase === 'memorize') {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link href="/dashboard/category/memory" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontWeight: '500' }}><ArrowLeft size={20} /> Keluar</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: timeLeft <= 60 ? '#ef4444' : '#111827', fontWeight: 'bold', fontSize: '24px' }}><Timer size={24} /> {formatTime(timeLeft)}</div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>Fase Hafalan: Bibir (64 Item)</h1>
          <p style={{ color: '#6b7280', marginTop: '8px' }}>Hafalkan susunan gambar bibir di bawah ini.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', marginBottom: '32px', maxHeight: '60vh', overflowY: 'auto', padding: '4px', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          {displayOrder.map((item, i) => (
            <div key={i} style={{ background: '#fff', padding: '8px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
              {renderImage(item)}
            </div>
          ))}
        </div>
        <button onClick={handleNextPhase} style={{ width: '100%', background: '#3b82f6', color: '#fff', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>Saya Sudah Hafal, Lanjut ke Adapto X →</button>
      </div>
    );
  }

  if (phase === 'recall') {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#111827', fontWeight: 'bold', fontSize: '24px' }}><Timer size={24} /> {formatTime(timeLeft)}</div>
          <div style={{ background: '#eff6ff', color: '#1d4ed8', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold' }}>Adapto X Mode</div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>Klik Sesuai Urutan!</h1>
          <p style={{ color: '#6b7280', marginTop: '8px' }}>Bibir terpilih: <strong>{userAnswer.length}</strong> / {totalItems}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', marginBottom: '32px', maxHeight: '60vh', overflowY: 'auto', padding: '4px', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          {displayOrder.map((item, i) => {
            const isSelected = userAnswer.includes(item);
            return (
              <div key={i} onClick={() => handleSelectItem(item)} style={{ background: isSelected ? '#eff6ff' : '#fff', padding: '8px', borderRadius: '8px', border: isSelected ? '2px solid #3b82f6' : '1px solid #e5e7eb', textAlign: 'center', cursor: 'pointer', opacity: isSelected ? 0.6 : 1, transform: isSelected ? 'scale(0.95)' : 'scale(1)', position: 'relative' }}>
                {isSelected && <div style={{ position: 'absolute', top: -8, left: -8, background: '#3b82f6', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>{userAnswer.indexOf(item) + 1}</div>}
                {renderImage(item)}
              </div>
            )
          })}
        </div>
        <button onClick={handleSubmitRecall} disabled={userAnswer.length !== totalItems} style={{ width: '100%', background: userAnswer.length === totalItems ? '#10b981' : '#9ca3af', color: '#fff', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: userAnswer.length === totalItems ? 'pointer' : 'not-allowed' }}>
          {userAnswer.length === totalItems ? 'Submit Jawaban' : `Pilih semua bibir dulu (${userAnswer.length}/${totalItems})`}
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: 16 }} />
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: 8 }}>Evaluasi Adapto X</h1>
      <div style={{ background: '#f9fafb', padding: '32px 64px', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center', marginBottom: 32 }}>
        <p style={{ color: '#6b7280', marginBottom: 8 }}>Jawaban Benar</p>
        <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#3b82f6' }}>{score} <span style={{ fontSize: '24px', color: '#9ca3af' }}>/ {totalItems}</span></p>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px', maxWidth: '600px' }}>
        {Array.from({ length: totalItems }).map((_, i) => {
          const isCorrect = userAnswer[i] === lipsOrder[i];
          return (
            <div key={i} style={{ width: '30px', height: '30px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isCorrect ? '#dcfce7' : '#fee2e2', color: isCorrect ? '#166534' : '#991b1b' }}>
              {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button onClick={() => window.location.reload()} style={{ background: '#3b82f6', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Main Lagi</button>
        <Link href="/dashboard/category/memory" style={{ background: '#e5e7eb', color: '#374151', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Kembali</Link>
      </div>
    </div>
  );
}