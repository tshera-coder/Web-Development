// Shared helpers for every page
window.U = {
  esc: s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
  // Wrap code-looking bits (tags, functions, hex colours) in <code>
  fmt: s => U.esc(s).replace(/(&lt;[^&]*?&gt;|[a-zA-Z.]+\([^)]*\)|#[0-9a-fA-F]{6}\b)/g, m => '<code>' + m + '</code>'),
  get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
  // Which week is open today, based on START_DATE (1..16)
  openWeek: () => {
    const start = new Date(CONFIG.START_DATE + 'T00:00:00');
    const days = Math.floor((Date.now() - start) / 86400000);
    return Math.max(1, Math.min(WEEKS.length, Math.floor(days / 7) + 1));
  },
  // Units used to group the weeks on the home page
  UNITS: [
    { name: 'Unit 1 · HTML', from: 1, to: 6 },
    { name: 'Unit 2 · CSS and layout', from: 7, to: 12 },
    { name: 'Unit 3 · JavaScript and tools', from: 13, to: 16 }
  ]
};
document.querySelectorAll('[data-course]').forEach(el => el.textContent = CONFIG.COURSE_NAME);
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
