import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">kauê<span>.</span>dev</div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Santos, SP · Desenvolvimento & Produtos Digitais
          </p>
        </div>
        <ul className="footer-links">
          <li><Link href="/condohub">CondoHub</Link></li>
          <li><Link href="/freightflow">FreightFlow</Link></li>
          <li><Link href="/#produtos">Produtos</Link></li>
          <li><Link href="/servicos-dev">Dev & Sites</Link></li>
          <li><a href="https://pulsops.vercel.app/" target="_blank" rel="noreferrer">PulsOps</a></li>
          <li><a href="https://www.english-ai.com.br" target="_blank" rel="noreferrer">EnglishAI</a></li>
        </ul>
        <span className="footer-copy">© 2026 Kauê Lima</span>
      </div>
    </footer>
  )
}
