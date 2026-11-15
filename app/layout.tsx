import type { Metadata } from 'next';
import './globals.css';

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
        {/* SIDEBAR */}
        <aside style={{
          width: '250px',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255,255,255,0.3)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h2 style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>🎮 COC Apps</h2>
          
          <a href="/dashboard" style={{ color: '#fff', fontSize: '18px', padding: '10px', background: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            📊 Dashboard
          </a>
          <a href="/dashboard/leaderboard" style={{ color: '#fff', fontSize: '18px', padding: '10px', borderRadius: '8px' }}>
            🏆 Papan Peringkat
          </a>
          <a href="/login" style={{ color: '#fff', fontSize: '18px', padding: '10px', borderRadius: '8px', marginTop: 'auto' }}>
            🚪 Login
          </a>
        </aside>

        {/* KONTEN UTAMA */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* NAVBAR */}
          <header style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.3)'
          }}>
            <h3 style={{ color: '#fff', margin: 0 }}>Season 1 - 3</h3>
            <div style={{ color: '#fff', fontWeight: 'bold' }}>Halo, Player! 👋</div>
          </header>

          {/* HALAMAN (page.tsx) AKAN MASUK KE SINI */}
          <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}