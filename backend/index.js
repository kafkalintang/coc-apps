const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Data dummy game & babak
const games = [
  { id: 'hitungan', name: 'Hitungan', desc: 'Uji kecepatan berhitung' },
  { id: 'ingatan', name: 'Ingatan', desc: 'Uji daya ingat' },
  { id: 'spasial', name: 'Spasial', desc: 'Uji kemampuan spasial' },
  { id: 'cepat', name: 'Berpikir Cepat', desc: 'Uji kecepatan berpikir' },
];

// Data dummy peringkat
let leaderboard = [
  { id: 1, name: 'Budi', score: 950 },
  { id: 2, name: 'Sari', score: 870 },
  { id: 3, name: 'Andi', score: 800 },
];

// Endpoint: daftar game/babak
app.get('/api/games', (req, res) => {
  res.json(games);
});

// Endpoint: papan peringkat
app.get('/api/leaderboard', (req, res) => {
  const sorted = [...leaderboard].sort((a, b) => b.score - a.score);
  res.json(sorted);
});

// Endpoint: kirim skor (sementara tanpa auth)
app.post('/api/score', (req, res) => {
  const { name, score } = req.body;
  if (!name || score == null) {
    return res.status(400).json({ error: 'name dan score wajib diisi' });
  }
  const newEntry = { id: Date.now(), name, score };
  leaderboard.push(newEntry);
  res.status(201).json(newEntry);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend jalan di http://localhost:${PORT}`);
});