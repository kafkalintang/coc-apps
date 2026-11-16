'use client';

import Link from 'next/link';
import { Calculator, Brain, Box, Lightbulb, Puzzle } from 'lucide-react';

// Data Kategori dipindah ke sini biar super gampang diedit
const CATEGORIES = [
  { 
    id: 'arithmetic', 
    name: 'Arithmetic / Numerical', 
    desc: 'Uji kecepatan berhitung dan logika numerik.',
    icon: Calculator,
    color: '#3b82f6' // Biru
  },
  { 
    id: 'memory', 
    name: 'Memory', 
    desc: 'Uji daya ingat angka, simbol, dan posisi.',
    icon: Brain,
    color: '#8b5cf6' // Ungu
  },
  { 
    id: 'spatial', 
    name: 'Spatial Reasoning', 
    desc: 'Bayangkan objek 2D menjadi 3D dan rotasi.',
    icon: Box,
    color: '#10b981' // Hijau
  },
  { 
    id: 'logical', 
    name: 'Logical Reasoning', 
    desc: 'Temukan pola dan pecahkan teka-teki.',
    icon: Lightbulb,
    color: '#f59e0b' // Kuning
  },
  { 
    id: 'problem-solving', 
    name: 'Problem Solving', 
    desc: 'Susun strategi dengan batasan tertentu.',
    icon: Puzzle,
    color: '#ef4444' // Merah
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ color: '#111827', marginBottom: 8, fontSize: '28px', fontWeight: 'bold' }}>
        Dashboard COC
      </h1>
      <p style={{ color: '#6b7280', marginBottom: 32, fontSize: 16 }}>
        Pilih kategori kemampuan untuk melihat daftar game:
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: 20 
      }}>
        {CATEGORIES.map((category) => {
          // Ambil komponen ikon dari data di atas
          const Icon = category.icon;

          return (
            <Link 
              href={`/dashboard/category/${category.id}`} 
              key={category.id} 
              style={{ textDecoration: 'none' }}
            >
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
                transition: 'all 0.2s ease-in-out'
              }}
              // Efek Hover: Naik sedikit dan bayangannya menebal
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
              >
                {/* Kotak Ikon */}
                <div style={{ 
                  background: '#f3f4f6', 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <Icon size={32} color={category.color} />
                </div>

                {/* Teks */}
                <div>
                  <h3 style={{ marginBottom: 8, color: '#111827', fontSize: '18px', fontWeight: '600' }}>
                    {category.name}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: '1.5' }}>
                    {category.desc}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}