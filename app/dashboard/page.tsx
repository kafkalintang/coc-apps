'use client';

import Link from 'next/link';
import { Calculator, Brain, Box, Lightbulb, Puzzle } from 'lucide-react';

// Data Kategori
const CATEGORIES = [
  { 
    id: 'arithmetic', 
    name: 'Arithmetic / Numerical', 
    desc: 'Uji kecepatan berhitung dan logika numerik.',
    icon: Calculator,
    color: '#3b82f6',
    bgColor: '#eff6ff' // Background ikon yang senada
  },
  { 
    id: 'memory', 
    name: 'Memory', 
    desc: 'Uji daya ingat angka, simbol, dan posisi.',
    icon: Brain,
    color: '#8b5cf6',
    bgColor: '#f5f3ff'
  },
  { 
    id: 'spatial', 
    name: 'Spatial Reasoning', 
    desc: 'Bayangkan objek 2D menjadi 3D dan rotasi.',
    icon: Box,
    color: '#10b981',
    bgColor: '#ecfdf5'
  },
  { 
    id: 'logical', 
    name: 'Logical Reasoning', 
    desc: 'Temukan pola dan pecahkan teka-teki.',
    icon: Lightbulb,
    color: '#f59e0b',
    bgColor: '#fffbeb'
  },
  { 
    id: 'problem-solving', 
    name: 'Problem Solving', 
    desc: 'Susun strategi dengan batasan tertentu.',
    icon: Puzzle,
    color: '#ef4444',
    bgColor: '#fef2f2'
  },
];

// Kumpulan Style agar JSX lebih bersih
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  headerTitle: {
    color: '#111827',
    marginBottom: '8px',
    fontSize: '32px',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  headerSubtitle: {
    color: '#6b7280',
    marginBottom: '40px',
    fontSize: '16px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    border: '1px solid #f3f4f6',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    cursor: 'pointer',
    height: '100%',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginBottom: '8px',
    color: '#111827',
    fontSize: '18px',
    fontWeight: '700',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
  }
};

export default function DashboardPage() {
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.headerTitle}>
          Dashboard Game Clash Of Champions
        </h1>
        <p style={styles.headerSubtitle}>
          Pilih kategori kemampuan untuk melihat daftar game:
        </p>
      </div>

      <div style={styles.grid}>
        {CATEGORIES.map((category) => {
          const Icon = category.icon;

          return (
            <Link 
              href={`/dashboard/category/${category.id}`} 
              key={category.id} 
              style={{ textDecoration: 'none' }}
            >
              <div 
                style={styles.card}
                // Efek Hover: Naik, bayangan lebih tebal, dan border berwarna
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = category.color + '40'; // Warna border transparan
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = styles.card.boxShadow;
                  e.currentTarget.style.borderColor = '#f3f4f6';
                }}
              >
                {/* Kotak Ikon dengan background dinamis */}
                <div style={{ ...styles.iconWrapper, background: category.bgColor }}>
                  <Icon size={28} color={category.color} strokeWidth={2.5} />
                </div>

                {/* Teks */}
                <div>
                  <h3 style={styles.cardTitle}>
                    {category.name}
                  </h3>
                  <p style={styles.cardDesc}>
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