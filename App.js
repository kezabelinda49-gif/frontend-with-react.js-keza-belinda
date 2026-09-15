import React from 'react'

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f3f4f6', minHeight: '100vh', color: '#111827' }}>
      <nav style={{
        display: 'flex',
        gap: '1.5rem',
        padding: '1rem 2rem',
        background: '#111827',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>COBANGA</div>
        <div className="menu" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>Home</a>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>About</a>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>Trade</a>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>Admissions</a>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
        </div>
      </nav>

      <main className="body" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{
          background: 'linear-gradient(135deg, #d97706, #f59e0b)',
          color: '#fff',
          borderRadius: '18px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.9 }}>School of Excellence</p>
            <h1 style={{ margin: '0.75rem 0', fontSize: '2.7rem', lineHeight: 1.1 }}>HOPE FOR THE FUTURE</h1>
            <p style={{ margin: 0, maxWidth: '620px', fontSize: '1.06rem', lineHeight: 1.7 }}>
              A creative space where art meets trade, ideas transform into value, and culture inspires business.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: '10px', padding: '0.9rem 1.4rem', fontWeight: 700, cursor: 'pointer' }}>Enroll Now</button>
              <button style={{ background: '#fff', color: '#111827', border: 'none', borderRadius: '10px', padding: '0.9rem 1.4rem', fontWeight: 700, cursor: 'pointer' }}>Learn More</button>
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            minWidth: '260px',
            maxWidth: '340px',
            width: '100%'
          }}>
            <p style={{ margin: '0 0 1rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9 }}>Quick Facts</p>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              <div><strong>16</strong> classes</div>
              <div><strong>800</strong> students</div>
              <div><strong>400</strong> girls</div>
              <div><strong>400</strong> boys</div>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#ffffff', borderRadius: '14px', padding: '1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ marginTop: 0 }}>Trade</h2>
            <p style={{ marginBottom: 0 }}>
              Software Development: 155k<br />
              Accounting: 155k<br />
              Tourism: 150k
            </p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '14px', padding: '1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ marginTop: 0 }}>Admissions</h2>
            <p style={{ marginBottom: 0 }}>
              Join a learning environment focused on skill, discipline, creativity, and growth.
            </p>
          </div>
        </section>

        <section style={{
          background: '#ffffff',
          borderRadius: '18px',
          padding: '2rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ marginTop: 0 }}>Why choose COBANGA?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '1rem' }}>
              <strong>Quality education</strong>
              <p style={{ marginBottom: 0 }}>Balanced learning for academics, creativity, and practical skills.</p>
            </div>
            <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '1rem' }}>
              <strong>Career-focused programs</strong>
              <p style={{ marginBottom: 0 }}>Training designed for real opportunities in work and business.</p>
            </div>
            <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '1rem' }}>
              <strong>Future-ready learning</strong>
              <p style={{ marginBottom: 0 }}>Helping students build confidence, talent, and purpose.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
