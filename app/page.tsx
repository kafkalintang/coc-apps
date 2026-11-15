import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ color: '#fff', textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Selamat Datang di COC Apps</h1>
      <Link href="/dashboard" style={{ background: '#0077c8', padding: '12px 24px', color: '#fff', borderRadius: '8px', fontSize: '20px' }}>
        Mulai Bermain →
      </Link>
    </div>
  );
}