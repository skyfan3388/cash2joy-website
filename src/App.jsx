export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <span className="logo-mark">C</span>
            <span>Cash2Joy</span>
          </div>

          <nav className="nav-links">
            <a href="#services">服務</a>
            <a href="#how-it-works">流程</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="btn btn-small">
              聯絡我們
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="badge">快速回覆｜流程清晰｜手機友善</div>
              <h1>現金安排更簡單，<br />快速聯絡，即時了解。</h1>
              <p className="hero-text">
                Cash2Joy 提供簡潔直接的網站體驗，讓客戶可以快速了解服務、
                常見問題與聯絡方式。無需複雜操作，幾步即可開始查詢。
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/85200000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp 查詢
                </a>
                <a className="btn btn-secondary" href="#how-it-works">
                  查看流程
                </a>
              </div>

              <div className="hero-points">
                <div className="point-card">
                  <strong>快速</strong>
                  <span>查詢流程直接，減少等待。</span>
                </div>
                <div className="point-card">
                  <strong>清晰</strong>
                  <span>服務說明一目了然，更易理解。</span>
                </div>
                <div className="point-card">
                  <strong>方便</strong>
                  <span>支援手機瀏覽，隨時聯絡。</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="glass-card">
                <div className="mini-label">安心體驗</div>
                <h3>簡單介面，專業呈現</h3>
                <p>
                  用現代網站方式展示服務內容，建立信任感，
                  令客戶更容易主動查詢。
                </p>

                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">1頁式</span>
                    <span className="stat-label">容易瀏覽</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">手機版</span>
                    <span className="stat-label">響應式設計</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">CTA</span>
                    <span className="stat-label">直接聯絡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-tag">服務特色</p>
              <h2>清楚、簡潔、可信的網站架構</h2>
              <p>
                為品牌建立專業第一印象，令訪客一打開網站就知道你提供咩服務。
              </p>
            </div>

            <div className="card-grid">
              <article className="info-card">
                <div className="icon">⚡</div>
                <h3>快速了解服務</h3>
                <p>首頁直接展示重點內容，訪客唔使周圍搵資料。</p>
              </article>

              <article className="info-card">
                <div className="icon">📱</div>
                <h3>手機版友善</h3>
                <p>版面會自動適應手機、平板、桌面，睇落更舒服。</p>
              </article>

              <article className="info-card">
                <div className="icon">🔒</div>
                <h3>建立信任感</h3>
                <p>透過清晰資訊架構、FAQ 同 CTA，令客戶更放心查詢。</p>
              </article>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="section-tag">流程</p>
              <h2>簡單 3 步開始</h2>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>
                <h3>瀏覽網站</h3>
                <p>先睇清楚服務介紹、特色同常見問題。</p>
              </div>

              <div className="step">
                <div className="step-number">02</div>
                <h3>WhatsApp 查詢</h3>
                <p>一鍵聯絡，直接向你了解詳情。</p>
              </div>

              <div className="step">
                <div className="step-number">03</div>
                <h3>跟進安排</h3>
                <p>再由你按實際需要作出說明與後續處理。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-tag">FAQ</p>
              <h2>常見問題</h2>
            </div>

            <div className="faq-list">
              <details className="faq-item">
                <summary>呢個網站可唔可以之後自己改內容？</summary>
                <p>可以，你可以直接修改文字、顏色、按鈕連結，同埋新增區塊。</p>
              </details>

              <details className="faq-item">
                <summary>可唔可以之後加表單？</summary>
                <p>可以，之後可以幫你加聯絡表單、FAQ 展開效果、甚至多頁版本。</p>
              </details>

              <details className="faq-item">
                <summary>可唔可以部署去 Vercel？</summary>
                <p>可以，呢個結構就係專門為 GitHub + Vercel 部署而整理。</p>
              </details>
            </div>
          </div>
        </section>

        <section id="contact" className="section cta-section">
          <div className="container cta-box">
            <div>
              <p className="section-tag light">立即開始</p>
              <h2>想公開網站？而家已經可以直接部署。</h2>
              <p>
                你只要建立好資料夾、貼入以下檔案、上傳去 GitHub，
                再交畀 Vercel 就得。
              </p>
            </div>

            <div className="cta-actions">
              <a
                className="btn btn-light"
                href="https://wa.me/85200000000"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp 聯絡
              </a>
              <a className="btn btn-outline-light" href="#top">
                返回頂部
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}