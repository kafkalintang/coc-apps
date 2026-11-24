'use client';

import Link from 'next/link';
import { Calculator, Brain, Box, Lightbulb, Puzzle } from 'lucide-react';

// Data Kategori dengan tema warna Pastel Lucu
const CATEGORIES = [
  { 
    id: 'arithmetic', 
    name: 'Arithmetic / Numerical', 
    desc: 'Uji kecepatan berhitung dan logika numerik.',
    icon: Calculator,
    color: '#60a5fa', // Biru pastel
    gradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    iconBg: '#bfdbfe'
  },
  { 
    id: 'memory', 
    name: 'Memory', 
    desc: 'Uji daya ingat angka, simbol, dan posisi.',
    icon: Brain,
    color: '#c084fc', // Ungu pastel
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    iconBg: '#e9d5ff'
  },
  { 
    id: 'spatial', 
    name: 'Spatial Reasoning', 
    desc: 'Bayangkan objek 2D menjadi 3D dan rotasi.',
    icon: Box,
    color: '#34d399', // Hijau pastel
    gradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
    iconBg: '#a7f3d0'
  },
  { 
    id: 'logical', 
    name: 'Logical Reasoning', 
    desc: 'Temukan pola dan pecahkan teka-teki.',
    icon: Lightbulb,
    color: '#fbbf24', // Kuning pastel
    gradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    iconBg: '#fde68a'
  },
  { 
    id: 'problem-solving', 
    name: 'Problem Solving', 
    desc: 'Susun strategi dengan batasan tertentu.',
    icon: Puzzle,
    color: '#fb7185', // Merah/Pink pastel
    gradient: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
    iconBg: '#fecdd3'
  },
];

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    // Background gradasi pastel pelangi yang sangat lembut
    background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    padding: '40px 24px',
    fontFamily: '"Nunito", system-ui, -apple-system, sans-serif', // Font membulat jika tersedia
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  headerTitle: {
    color: '#1f2937',
    marginBottom: '12px',
    fontSize: '36px',
    fontWeight: '900',
    letterSpacing: '-0.03em',
    textAlign: 'center' as const,
    background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  headerSubtitle: {
    color: '#6b7280',
    marginBottom: '48px',
    fontSize: '16px',
    textAlign: 'center' as const,
    fontWeight: '500',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    borderRadius: '24px', // Lebih bulat = lebih lucu
    padding: '28px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    cursor: 'pointer',
    height: '100%',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', // Animasi bouncy
  },
  iconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '20px', // Ikon kotak membulat
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 -4px 0 rgba(0,0,0,0.05)', // Efek 3D timbul
  },
  cardTitle: {
    marginBottom: '8px',
    color: '#1f2937',
    fontSize: '19px',
    fontWeight: '800',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
    fontWeight: '500',
  }
};

export default function DashboardPage() {
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.headerTitle}>
          Clash Of Champions 🏆
        </h1>
        <p style={styles.headerSubtitle}>
          Pilih kategori kemampuanmu dan mulai bertarung!
        </p>

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
                    background: category.gradient,
                  }}
                  // Efek Hover: Bouncy & Bayangan tebal pastel
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 20px 30px -10px ${category.color}40`;
                    e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  }}
                >
                  <div style={{ ...styles.iconWrapper, background: category.iconBg }}>
                    <Icon size={32} color={category.color} strokeWidth={2.5} />
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
    </div>
  );
}