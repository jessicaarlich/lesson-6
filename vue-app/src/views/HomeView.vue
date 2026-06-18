<template>
  <main class="page-shell">
    <section class="card">
      <div class="avatar-wrap" aria-label="Jessica Arlich profile placeholder">
        <div class="avatar">JA</div>
      </div>

      <p class="eyebrow">Human-Centered Professional</p>
      <h1 class="name">Jessica Arlich</h1>
      <p class="headline">Building thoughtful digital experiences with clarity, color, and craft.</p>

      <nav class="link-list" aria-label="Primary links">
        <a class="link-button" href="https://example.com/portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a class="link-button" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="link-button" href="mailto:jessica@example.com">Email</a>
      </nav>
    </section>
  </main>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.card {
  width: min(100%, 420px);
  background: #fffaf7;
  border: 1px solid #f3dfcf;
  border-radius: 28px;
  box-shadow: 0 18px 40px rgba(26, 17, 10, 0.08);
  padding: 28px 22px;
  text-align: center;
}

.avatar-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb56b, #ff7d3b);
  color: #17110d;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: #ff7d3b;
}

.name {
  font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.05;
  color: #17110d;
  margin-top: 4px;
}

.headline {
  margin-top: 10px;
  color: #3d342d;
  font-size: 1rem;
}

.link-list {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}

.link-button {
  display: block;
  padding: 13px 14px;
  border-radius: 999px;
  text-decoration: none;
  color: #17110d;
  background: #fff;
  border: 1px solid #f0dfd3;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;
}

.link-button:hover {
  transform: translateY(-2px);
  background: #fff4ea;
  box-shadow: 0 10px 18px rgba(255, 125, 59, 0.18);
}

@media (min-width: 640px) {
  .card {
    padding: 32px;
  }

  h1 {
    font-size: 2.35rem;
  }
}
</style>
