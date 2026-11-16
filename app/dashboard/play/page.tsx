'use client';

import { useState, useEffect } from 'react';
import ShuffleRecall from './games/memory/ShuffleRecall';
import LipsRecall from './games/memory/LipsRecall';

export default function PlayRouter() {
  const [gameType, setGameType] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type) setGameType(type);
  }, []);

  if (!gameType) return <p style={{ padding: 24, textAlign: 'center' }}>Memuat game...</p>;

  // --- ROUTER KE MASING-MASING GAME ---
  if (gameType === 'shuffle') return <ShuffleRecall />;
  if (gameType === 'lips') return <LipsRecall />;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Game belum tersedia :(</h2>
    </div>
  );
}