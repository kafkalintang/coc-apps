import type { Metadata } from 'next';
import './globals.css';
import { LayoutDashboard, Trophy, LogIn, Gamepad2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'COC Apps',
  description: 'Game Dashboard by Ruangguru',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', minHeight: '100vh', margin: 0 }}>
        {/* SIDEBAR: Gradasi Navy ke Hitam */}
        <aside style={{
          width: '260px',
          background: 'linear-gradient(to bottom, #0f172a, #000000)', // Navy ke Hitam
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px', color: '#fff' }}>
            <Gamepad2 size={28} color="#60a5fa" />
            <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>COC Apps</h2>
          </div>
          
          <Link href="/dashboard" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', transition: '0.2s' }}>
            <LayoutDashboard size={20} />
            <span style={{ fontWeight: '500' }}>Dashboard</span>
          </Link>
          
          <Link href="/dashboard/leaderboard" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', transition: '0.2s' }}>
            <Trophy size={20} />
            <span style={{ fontWeight: '500' }}>Papan Peringkat</span>
          </Link>

          <div style={{ marginTop: 'auto' }}>
            <Link href="/login" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px' }}>
              <LogIn size={20} />
              <span style={{ fontWeight: '500' }}>Login</span>
            </Link>
          </div>
        </aside>

        {/* KONTEN UTAMA */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* NAVBAR: Putih bersih */}
          <header style={{
            background: '#ffffff',
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ color: '#374151', margin: 0, fontWeight: '600' }}>Season 1 - 3</h3>
            <div style={{ color: '#1f2937', fontWeight: '600' }}>Halo, Player! 👋</div>
          </header>

          {/* AREA PAGE: Putih/Abu terang */}
          <div style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}