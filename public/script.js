* {
  box-sizing: border-box;
}

:root {
  --primary: #0d7b73;
  --primary-dark: #084f4a;
  --secondary: #f4faf9;
  --accent: #dff5f1;
  --text: #1f2a37;
  --muted: #5f6c7b;
  --white: #ffffff;
  --border: rgba(13, 123, 115, 0.1);
  --shadow: 0 18px 40px rgba(10, 36, 34, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #f8fbfb;
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 80px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #4ab5a6);
  color: var(--white);
  font-weight: 800;
  font-size: 1.2rem;
}

.brand-name {
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.brand-tag {
  color: var(--muted);
  font-size: 0.76rem;
}

.main-nav {
  display: flex;
  gap: 24px;
  color: var(--muted);
  font-weight: 500;
}

.main-nav a:hover {
  color: var(--primary);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  border: 1px solid transparent;
  transition: 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #19a59a);
  color: var(--white);
  box-shadow: 0 16px 24px rgba(10, 122, 114, 0.2);
}

.btn-secondary {
  background: var(--white);
  border-color: rgba(13, 123, 115, 0.15);
  color: var(--text);
}

.btn-block {
  width: 100%;
}

.hero {
  padding: 80px 0 32px;
  background: linear-gradient(180deg, rgba(223, 245, 241, 0.7), rgba(248, 251, 251, 1));
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 30px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.76rem;
}

h1, h2, h3 {
  margin-top: 0;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 18px;
}

.hero-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 560px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.hero-meta {
  display: flex;
  gap: 32px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.hero-meta strong {
  display: block;
  margin-bottom: 6px;
}

.hero-meta p {
  margin: 0;
  color: var(--muted);
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: min(420px, 100%);
  background: linear-gradient(135deg, var(--white), rgba(223, 245, 241, 0.5));
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 30px;
  box-shadow: var(--shadow);
}

.card-label {
  margin: 0 0 10px;
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

.panel-card ul {
  margin: 18px 0 0;
  padding-left: 18px;
  color: var(--muted);
}

.stats {
  padding: 12px 0 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 12px 24px rgba(22, 53, 49, 0.04);
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-dark);
}

.stat-label {
  margin-top: 8px;
  color: var(--muted);
}

.section {
  padding: 100px 0;
}

.alt-bg {
  background: linear-gradient(180deg, #ffffff, #f6faf9);
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.two-col h2,
.section-heading h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 14px;
}

.two-col p,
.support-copy,
.contact-info p,
.info-cards p {
  color: var(--muted);
}

.info-cards {
  display: grid;
  gap: 18px;
}

.mini-card, .form-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.section-heading {
  margin-bottom: 32px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.service-card {
  background: var(--white);
  border-radius: 20px;
  border: 1px solid var(--border);
  padding: 28px 22px;
  box-shadow: 0 12px 24px rgba(14, 42, 39, 0.05);
}

.service-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.service-card h3 {
  margin-bottom: 10px;
  font-size: 1.25rem;
}

.service-card p {
  color: var(--muted);
  margin-bottom: 0;
}

.department-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.department-item {
  background: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 20px 18px;
  color: var(--text);
  font-weight: 600;
}

.doctor-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.doctor-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px 20px;
  box-shadow: 0 12px 24px rgba(13, 42, 39, 0.05);
}

.doctor-avatar {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  margin-bottom: 16px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--accent), var(--secondary));
  color: var(--primary-dark);
  font-weight: 800;
  font-size: 1.2rem;
}

.doctor-card h3 {
  margin-bottom: 6px;
}

.doctor-card p {
  margin: 0;
  color: var(--muted);
}

.doctor-specialty {
  display: inline-block;
  margin: 12px 0 10px;
  color: var(--primary);
  font-weight: 700;
}

.appointment-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}

.appointment-points {
  display: grid;
  gap: 20px;
  margin-top: 28px;
}

.form-card {
  display: grid;
  gap: 20px;
}

.field-row {
  display: grid;
  gap: 16px;
}

.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: grid;
  gap: 10px;
  font-weight: 600;
  color: var(--text);
}

input,
select,
textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(30, 40, 55, 0.18);
  font: inherit;
  color: var(--text);
  background: #fff;
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid rgba(13, 123, 115, 0.2);
  border-color: rgba(13, 123, 115, 0.5);
}

textarea {
  resize: vertical;
  min-height: 110px;
}

.form-message {
  min-height: 24px;
  margin: 0;
  font-weight: 600;
  color: var(--primary-dark);
}

.faq-list {
  display: grid;
  gap: 16px;
}

.faq-item {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px 20px;
}

.faq-item h3 {
  margin-bottom: 8px;
  font-size: 1.08rem;
}

.faq-item p {
  margin: 0;
  color: var(--muted);
}

.contact-info {
  display: grid;
  gap: 18px;
  margin-top: 28px;
}

.contact-info strong {
  display: block;
  margin-bottom: 6px;
}

.footer {
  background: #0d1d1a;
  color: rgba(255, 255, 255, 0.8);
  padding: 28px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .hero-grid,
  .two-col,
  .appointment-grid,
  .contact-grid,
  .cards-grid,
  .department-grid,
  .doctor-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .main-nav {
    display: none;
  }
}

@media (max-width: 680px) {
  .hero-grid,
  .two-col,
  .appointment-grid,
  .contact-grid,
  .cards-grid,
  .department-grid,
  .doctor-grid,
  .stats-grid,
  .two-up {
    grid-template-columns: 1fr;
  }

  .topbar-inner {
    padding: 16px 0;
  }

  .brand-name {
    font-size: 0.82rem;
  }

  .btn {
    width: 100%;
  }

  .hero-actions {
    width: 100%;
  }

  .section {
    padding: 78px 0;
  }
}
