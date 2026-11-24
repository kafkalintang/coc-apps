'use client';

import Link from 'next/link';
import { Calculator, Brain, Box, Lightbulb, Puzzle } from 'lucide-react';

const CATEGORIES = [
  { 
    id: 'arithmetic', 
    name: 'Arithmetic / Numerical', 
    desc: 'Uji kecepatan berhitung dan logika numerik.',
    icon: Calculator,
    color: '#3b82f6', // Biru
    gradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' // Gradasi kotak ikon
  },
  { 
    id: 'memory', 
    name: 'Memory', 
    desc: 'Uji daya ingat angka, simbol, dan posisi.',
    icon: Brain,
    color: '#8b5cf6', // Ungu
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)'
  },
  { 
    id: 'spatial', 
    name: 'Spatial Reasoning', 
    desc: 'Bayangkan objek 2D menjadi 3D dan rotasi.',
    icon: Box,
    color: '#10b981', // Hijau
    gradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)'
  },
  { 
    id: 'logical', 
    name: 'Logical Reasoning', 
    desc: 'Temukan pola dan pecahkan teka-teki.',
    icon: Lightbulb,
    color: '#f59e0b', // Kuning
    gradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)'
  },
  { 
    id: 'problem-solving', 
    name: 'Problem Solving', 
    desc: 'Susun strategi dengan batasan tertentu.',
    icon: Puzzle,
    color: '#ef4444', // Merah
    gradient: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)'
  },
];

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
    fontSize: '28px',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#6b7280',
    marginBottom: '32px',
    fontSize: '16px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f3f4f6',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    cursor: 'pointer',
    height: '100%',
    transition: 'all 0.2s ease-in-out',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginBottom: '8px',
    color: '#111827',
    fontSize: '18px',
    fontWeight: '600',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.5',
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = styles.card.boxShadow;
                }}
              >
                {/* HANYA KOTAK IKON INI YANG DIKASIH GRADASI WARNA */}
                <div style={{ ...styles.iconWrapper, background: category.gradient }}>
                  <Icon size={32} color={category.color} />
                </div>

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