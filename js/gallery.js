/* ============================================
   MARIA BUCHHAUS — gallery.js
   Filter, search, lightbox
   ============================================ */

(function () {
  'use strict';

  // ── State ──────────────────────────────────
  let paintings = [];       // full dataset (from data.js or buchhaus_paintings.json)
  let filtered  = [];       // currently visible subset
  let lightboxIndex = 0;   // index into `filtered`

  const activeFilters = {
    motiv:    new Set(),
    technik:  new Set(),
    stimmung: new Set(),
    farbe:    new Set(),
  };
  let searchQuery = '';

  // ── DOM refs ───────────────────────────────
  const grid        = document.getElementById('gallery-grid');
  const noResults   = document.getElementById('no-results');
  const resultCount = document.getElementById('result-count');
  const searchInput = document.getElementById('search-input');
  const resetBtn    = document.getElementById('reset-btn');

  const lightbox        = document.getElementById('lightbox');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImg     = document.getElementById('lightbox-img');
  const lightboxId      = document.getElementById('lightbox-id');
  const lightboxDesc    = document.getElementById('lightbox-desc');
  const lightboxTags    = document.getElementById('lightbox-tags');
  const lightboxClose   = document.getElementById('lightbox-close');
  const lightboxPrev    = document.getElementById('lightbox-prev');
  const lightboxNext    = document.getElementById('lightbox-next');

  // ── Boot ───────────────────────────────────
  function init() {
    // Try PAINTINGS from data.js (global), else fetch JSON
    if (typeof PAINTINGS !== 'undefined') {
      paintings = PAINTINGS;
      setup();
    } else {
      fetch('buchhaus_paintings.json')
        .then(r => r.json())
        .then(data => { paintings = data; setup(); })
        .catch(err => {
          grid.innerHTML = '<p style="padding:40px;color:#888">Fehler beim Laden der Daten.</p>';
          console.error(err);
        });
    }
    document.getElementById('footer-year').textContent = new Date().getFullYear();
  }

  function setup() {
    buildFilterPills();
    applyFilters();
    bindEvents();
  }

  // ── Build sidebar pills ────────────────────
  function buildFilterPills() {
    const categories = ['motiv', 'technik', 'stimmung', 'farbe'];
    categories.forEach(cat => {
      const fieldDe = `${cat}_de`;
      const counts  = {};
      paintings.forEach(p => {
        (p[fieldDe] || []).forEach(tag => {
          counts[tag] = (counts[tag] || 0) + 1;
        });
      });
      // Sort by frequency desc, then alpha
      const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b, 'de'));
      const container = document.getElementById(`${cat}-pills`);
      sorted.forEach(tag => {
        const pill = document.createElement('button');
        pill.className = 'pill';
        pill.textContent = tag;
        pill.dataset.cat = cat;
        pill.dataset.tag = tag;
        pill.addEventListener('click', () => togglePill(pill, cat, tag));
        container.appendChild(pill);
      });
    });
  }

  function togglePill(pill, cat, tag) {
    if (activeFilters[cat].has(tag)) {
      activeFilters[cat].delete(tag);
      pill.classList.remove('active');
    } else {
      activeFilters[cat].add(tag);
      pill.classList.add('active');
    }
    applyFilters();
  }

  // ── Filtering & search ─────────────────────
  function applyFilters() {
    const q = searchQuery.toLowerCase().trim();

    filtered = paintings.filter(p => {
      // Search across DE and EN descriptions and tags
      if (q) {
        const searchable = [
  p.beschreibung_de || '',
  p.beschreibung_en || '',
  (p.motiv_de    || []).join(' '),
  (p.motiv_en    || []).join(' '),
  (p.technik_de  || []).join(' '),
  (p.technik_en  || []).join(' '),
  (p.stimmung_de || []).join(' '),
  (p.stimmung_en || []).join(' '),
  (p.farbe_de    || []).join(' '),
  (p.farbe_en    || []).join(' '),
  p.titel || '',
].join(' ').toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      // Each active filter category must have at least one matching tag
      for (const cat of ['motiv', 'technik', 'stimmung', 'farbe']) {
        if (activeFilters[cat].size === 0) continue;
        const tags = p[`${cat}_de`] || [];
        const hasMatch = [...activeFilters[cat]].some(f => tags.includes(f));
        if (!hasMatch) return false;
      }

      return true;
    });

    renderGrid();
    updateCount();
  }

  // ── Render ─────────────────────────────────
  function renderGrid() {
    grid.innerHTML = '';
    if (filtered.length === 0) {
      noResults.style.display = 'block';
      return;
    }
    noResults.style.display = 'none';

    filtered.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = `${Math.min(i * 40, 400)}ms`;
      card.innerHTML = `
        <div class="card-image-wrap">
          <img 
            class="card-img" 
            src="images/${p.dateiname}" 
            alt="${p.titel || 'Werk Nr. ' + p.id}"
            loading="lazy"
          >
          <div class="card-overlay">
            <div class="card-zoom-icon">&#43;</div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">${p.titel ? p.titel : 'Ohne Titel'}</p>
        </div>
      `;
      card.addEventListener('click', () => openLightbox(i));
      grid.appendChild(card);
    });
  }

  function updateCount() {
    const total = paintings.length;
    const shown = filtered.length;
    if (shown === total) {
      resultCount.textContent = `${total} Werke`;
    } else {
      resultCount.textContent = `${shown} von ${total} Werken`;
    }
  }

  // ── Lightbox ───────────────────────────────
  function openLightbox(index) {
    lightboxIndex = index;
    showLightboxItem();
    lightbox.classList.add('open');
    lightboxOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showLightboxItem() {
    const p = filtered[lightboxIndex];
    if (!p) return;

    lightboxImg.src = `images/${p.dateiname}`;
    lightboxImg.alt = p.titel || `Werk Nr. ${p.id}`;
    lightboxId.textContent = `Werk Nr. ${p.id}${p.titel ? ' — ' + p.titel : ''}`;
    lightboxDesc.textContent = p.beschreibung_de || '';

    // Tags
    lightboxTags.innerHTML = '';
    const allTags = [
      ...(p.technik_de  || []),
      ...(p.stimmung_de || []),
    ];
    allTags.slice(0, 8).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'lightbox-tag';
      span.textContent = tag;
      lightboxTags.appendChild(span);
    });

    // Prev/next visibility
    lightboxPrev.style.opacity = lightboxIndex > 0 ? '1' : '0.2';
    lightboxNext.style.opacity = lightboxIndex < filtered.length - 1 ? '1' : '0.2';
  }

  // ── Events ─────────────────────────────────
  function bindEvents() {
    // Search
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      applyFilters();
    });

    // Reset
    resetBtn.addEventListener('click', () => {
      searchQuery = '';
      searchInput.value = '';
      Object.keys(activeFilters).forEach(k => activeFilters[k].clear());
      document.querySelectorAll('.pill.active').forEach(p => p.classList.remove('active'));
      applyFilters();
    });

    // Collapsible filter groups
    document.querySelectorAll('.filter-group-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        const pills = document.getElementById(btn.dataset.target);
        if (pills) pills.classList.toggle('collapsed', expanded);
      });
    });

    // Lightbox close
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);

    // Lightbox nav
    lightboxPrev.addEventListener('click', e => {
      e.stopPropagation();
      if (lightboxIndex > 0) { lightboxIndex--; showLightboxItem(); }
    });
    lightboxNext.addEventListener('click', e => {
      e.stopPropagation();
      if (lightboxIndex < filtered.length - 1) { lightboxIndex++; showLightboxItem(); }
    });

    // Keyboard
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft'  && lightboxIndex > 0)                   { lightboxIndex--; showLightboxItem(); }
      if (e.key === 'ArrowRight' && lightboxIndex < filtered.length - 1) { lightboxIndex++; showLightboxItem(); }
    });
  }

  // ── Start ──────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);

})();
