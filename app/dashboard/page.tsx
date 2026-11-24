'use client';

import Link from 'next/link';
import { Calculator, Brain, Box, Lightbulb, Puzzle } from 'lucide-react';

const CATEGORIES = [
  { 
    id: 'arithmetic', 
    name: 'Arithmetic / Numerical', 
    desc: 'Uji kecepatan berhitung dan logika numerik.',
    icon: Calculator,
    color: '#2563eb', // Teks & Ikon Biru
    cardGradient: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)', // Kartu gradasi soft
    iconBg: '#dbeafe' // Ikon background
  },
  { 
    id: 'memory', 
    name: 'Memory', 
    desc: 'Uji daya ingat angka, simbol, dan posisi.',
    icon: Brain,
    color: '#7c3aed', // Ungu
    cardGradient: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)',
    iconBg: '#ede9fe'
  },
  { 
    id: 'spatial', 
    name: 'Spatial Reasoning', 
    desc: 'Bayangkan objek 2D menjadi 3D dan rotasi.',
    icon: Box,
    color: '#059669', // Hijau
    cardGradient: 'linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%)',
    iconBg: '#d1fae5'
  },
  { 
    id: 'logical', 
    name: 'Logical Reasoning', 
    desc: 'Temukan pola dan pecahkan teka-teki.',
    icon: Lightbulb,
    color: '#d97706', // Kuning/Oranye
    cardGradient: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)',
    iconBg: '#fef3c7'
  },
  { 
    id: 'problem-solving', 
    name: 'Problem Solving', 
    desc: 'Susun strategi dengan batasan tertentu.',
    icon: Puzzle,
    color: '#dc2626', // Merah
    cardGradient: 'linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)',
    iconBg: '#fee2e2'
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
                style={{
                  ...styles.card,
                  background: category.cardGradient, // <--- KARTU YANG BERWARNA
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = category.color + '40'; // Border ikut warna
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = styles.card.boxShadow;
                  e.currentTarget.style.borderColor = '#f3f4f6';
                }}
              >
                <div style={{ ...styles.iconWrapper, background: category.iconBg }}>
                  <Icon size={32} color={category.color} />
                </div>

                <div>
                  <h3 style={{ ...styles.cardTitle, color: category.color }}>
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