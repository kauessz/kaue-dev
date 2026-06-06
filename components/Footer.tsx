export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            K<span>.</span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '4px' }}>
            Santos, SP · Brazil
          </p>
        </div>

        <ul className="footer-links">
          <li><a href="mailto:ssz.kaue@gmail.com">Email</a></li>
          <li>
            <a href="www.linkedin.com/in/kaue-lima01" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/kauessz" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://wa.me/5513988026188" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>

        <span className="footer-copy">© 2026 Kauê Lima</span>
      </div>
    </footer>
  )
}
