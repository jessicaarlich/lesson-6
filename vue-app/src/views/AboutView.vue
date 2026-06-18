<template>
  <main class="page-shell">
    <section class="card about-card">
      <div class="photo-frame" aria-label="Jessica portrait placeholder">
        <div class="photo-badge">JA</div>
      </div>

      <p class="eyebrow">About</p>
      <h1 class="name">Jessica Arlich</h1>
      <p class="bio">
        I’m a thoughtful creative professional who enjoys designing clear, welcoming digital experiences.
        This page is a simple place to share a little more about my style, interests, and approach.
      </p>

      <router-link class="back-link" to="/">Back to links</router-link>
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

.photo-frame {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.photo-badge {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #ffb56b, #ff7d3b);
  color: #17110d;
  font-weight: 700;
  font-size: 1.1rem;
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
  color: #17110d;
  margin-top: 4px;
}

.bio {
  margin-top: 12px;
  color: #3d342d;
  line-height: 1.5;
}

.back-link {
  display: inline-block;
  margin-top: 18px;
  color: #17110d;
  text-decoration: none;
  font-weight: 600;
}

.back-link:hover {
  color: #ff7d3b;
}
</style>
