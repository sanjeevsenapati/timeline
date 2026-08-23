/**
 * ============================================================================
 * SANJEEV SENAPATI — MAIN APPLICATION CONTROLLER
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize Theme Switcher (Default Rainbow Mode)
  initTheme();

  // 2. Initialize Navigation & Mobile Drawer
  initNavigation();

  // 3. Initialize Ambient Soundscape Engine
  initAmbientAudio();

  // 4. Load Personal Data (Synchronously from js/data.js or async from timeline-data.json)
  const data = window.personalData || await window.loadPersonalData();

  // 5. Populate Dynamic Content
  if (data && Object.keys(data).length > 0) {
    populateDynamicData(data);
  }

  // 6. Initialize Submodules
  if (window.initTimeline) window.initTimeline();
  if (window.initGalleryModal) window.initGalleryModal();
  if (window.initAnimations) window.initAnimations();
});

/**
 * ----------------------------------------------------------------------------
 * 1. THEME MANAGER
 * ----------------------------------------------------------------------------
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('sanjeev_theme') || 'rainbow';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'rainbow';
      let newTheme = 'rainbow';
      if (currentTheme === 'rainbow') {
        newTheme = 'dark';
      } else if (currentTheme === 'dark') {
        newTheme = 'light';
      } else {
        newTheme = 'rainbow';
      }
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sanjeev_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    let icon = '🌈';
    let nextTheme = 'Dark';
    if (theme === 'rainbow') {
      icon = '🌈';
      nextTheme = 'Dark';
    } else if (theme === 'dark') {
      icon = '☀️';
      nextTheme = 'Light';
    } else if (theme === 'light') {
      icon = '🌙';
      nextTheme = 'Rainbow';
    }
    btn.innerHTML = icon;
    btn.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    btn.setAttribute('title', `Switch to ${nextTheme} mode`);
  }
}

/**
 * ----------------------------------------------------------------------------
 * 2. NAVIGATION & APPLE DROPDOWN MENU
 * ----------------------------------------------------------------------------
 */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('floating-menu-btn');
  const dropdownMenu = document.getElementById('apple-dropdown-menu');
  const dropdownOverlay = document.getElementById('dropdown-overlay');
  const navLinks = document.querySelectorAll('.dropdown-nav-item, .apple-dropdown-menu a');

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle Dropdown Menu
  function toggleMenu(forceState) {
    const shouldOpen = typeof forceState === 'boolean' 
      ? forceState 
      : !dropdownMenu?.classList.contains('open');

    if (shouldOpen) {
      dropdownMenu?.classList.add('open');
      dropdownOverlay?.classList.add('visible');
      menuBtn?.classList.add('is-active');
      menuBtn?.setAttribute('aria-expanded', 'true');
    } else {
      dropdownMenu?.classList.remove('open');
      dropdownOverlay?.classList.remove('visible');
      menuBtn?.classList.remove('is-active');
      menuBtn?.setAttribute('aria-expanded', 'false');
    }
  }

  // Click on Menu Icon Button
  menuBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Click on Backdrop Overlay
  dropdownOverlay?.addEventListener('click', () => {
    toggleMenu(false);
  });

  // Close when clicking any link inside dropdown
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdownMenu?.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Close if clicked outside
  document.addEventListener('click', (e) => {
    if (dropdownMenu?.classList.contains('open') && !dropdownMenu.contains(e.target) && !menuBtn?.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset + 140;
    sections.forEach(sec => {
      const id = sec.getAttribute('id');
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(l => {
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
}

/**
 * ----------------------------------------------------------------------------
 * 3. DYNAMIC CONTENT INJECTION
 * ----------------------------------------------------------------------------
 */
function populateDynamicData(data) {
  const metrics = (data && typeof data.getMetrics === 'function')
    ? data.getMetrics()
    : (window.calculateMetrics ? window.calculateMetrics(data) : { age: 44, marriageYears: '13+', childrenCount: 2, citiesCount: 6 });

  // Metrics Bar in Dashboard
  const metricsGrid = document.getElementById('metrics-grid');
  if (metricsGrid) {
    metricsGrid.innerHTML = `
      <div class="metric-card reveal-on-scroll">
        <div class="metric-value count-up" data-target="${metrics.age}">0</div>
        <div class="metric-label">Years of Life</div>
        <div class="metric-sub">Born 21 March 1982</div>
      </div>
      <div class="metric-card reveal-on-scroll">
        <div class="metric-value count-up" data-target="13" data-suffix="+">0</div>
        <div class="metric-label">Years Married</div>
        <div class="metric-sub">Together Since 2013</div>
      </div>
      <div class="metric-card reveal-on-scroll">
        <div class="metric-value count-up" data-target="${metrics.childrenCount}">0</div>
        <div class="metric-label">Children</div>
        <div class="metric-sub">Aadvika & Aadhees</div>
      </div>
      <div class="metric-card reveal-on-scroll">
        <div class="metric-value count-up" data-target="20" data-suffix="+">0</div>
        <div class="metric-label">Years in Tech</div>
        <div class="metric-sub">Enterprise Engineering</div>
      </div>
      <div class="metric-card reveal-on-scroll">
        <div class="metric-value count-up" data-target="${metrics.citiesCount}">0</div>
        <div class="metric-label">Key Cities</div>
        <div class="metric-sub">Chapters across India</div>
      </div>
    `;
  }

  // Hero Badges
  const heroBadges = document.getElementById('hero-badges-row');
  if (heroBadges) {
    heroBadges.innerHTML = `
      <div class="hero-badge"><span class="hero-badge-icon">📍</span> ${data.identity.currentCity}</div>
      <div class="hero-badge"><span class="hero-badge-icon">⏳</span> Age ${metrics.age}</div>
      <div class="hero-badge"><span class="hero-badge-icon">💍</span> ${metrics.marriageYears} Married</div>
      <div class="hero-badge"><span class="hero-badge-icon">👨‍👧‍👦</span> Father of 2</div>
      <div class="hero-badge"><span class="hero-badge-icon">⚡</span> CBDC & Enterprise Tech</div>
    `;
  }

  // Skills Pills
  const skillsPillGrid = document.getElementById('skills-pill-grid');
  if (skillsPillGrid && data.career.skillsMatrix) {
    skillsPillGrid.innerHTML = data.career.skillsMatrix.workedWith.map(s => `
      <div class="skill-pill">
        <span>🔹</span>
        <strong>${s.name}</strong>
        <small style="opacity:0.75; font-size:0.78rem;">(${s.category})</small>
      </div>
    `).join('');
  }

  // Engineering Areas
  const engAreasGrid = document.getElementById('eng-areas-grid');
  if (engAreasGrid && data.career.skillsMatrix) {
    engAreasGrid.innerHTML = data.career.skillsMatrix.engineeringAreas.map(a => `
      <div class="eng-area-card">
        <h4>${a.name}</h4>
        <p>${a.desc}</p>
      </div>
    `).join('');
  }

  // CBDC Domains
  const cbdcGrid = document.getElementById('cbdc-domains-grid');
  if (cbdcGrid && data.career.cbdcChapter) {
    cbdcGrid.innerHTML = data.career.cbdcChapter.domains.map(d => `
      <div class="cbdc-domain-card">
        <h4>⚡ ${d.name}</h4>
        <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:0;">${d.desc}</p>
      </div>
    `).join('');
  }

  // Career Progression
  const careerProgressionGrid = document.getElementById('career-progression-grid');
  if (careerProgressionGrid && data.career.progression) {
    careerProgressionGrid.innerHTML = data.career.progression.map((p, i) => `
      <div class="framework-step-card">
        <div class="framework-step-num">0${i + 1}</div>
        <h4>${p.step}</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:0;">${p.desc}</p>
      </div>
    `).join('');
  }

  // Places Grid
  const placesGrid = document.getElementById('places-grid');
  if (placesGrid && data.places) {
    placesGrid.innerHTML = data.places.map(p => `
      <div class="place-card reveal-on-scroll">
        <div>
          <div class="place-header">
            <div>
              <div class="place-city">${p.city}</div>
              <div style="font-size:0.88rem; color:var(--text-muted);">${p.state} • ${p.role}</div>
            </div>
            <span class="place-period">${p.period}</span>
          </div>
          <p style="font-size:0.96rem; margin-bottom:1rem;">${p.story}</p>
        </div>
        <div class="place-lesson">
          <strong>Key Lesson:</strong> “${p.lesson}”
        </div>
      </div>
    `).join('');
  }

  // Children Cards
  const childrenGrid = document.getElementById('children-grid');
  if (childrenGrid && data.family.children) {
    childrenGrid.innerHTML = data.family.children.map(child => `
      <div class="child-card reveal-on-scroll">
        <div class="child-img-wrap clickable-photo" data-title="${child.name}" data-subtitle="${child.relationship} • ${child.personality}">
          <img src="${child.photo}" alt="${child.name}" loading="lazy" />
        </div>
        <div class="child-body">
          <span class="child-badge">${child.relationship} • Age ~${child.approxAge}</span>
          <h3>${child.name}</h3>
          <p class="quote-highlight">${child.quote}</p>
          <p style="font-size:0.95rem; margin-bottom:0.8rem;"><strong>Personality:</strong> ${child.personality}</p>
          <p style="font-size:0.95rem; margin-bottom:0.8rem;"><strong>What She/He Taught Me:</strong> ${child.lessonsToFather}</p>
          <div style="background:var(--bg-surface-elevated); padding:0.9rem; border-radius:var(--radius-sm); font-size:0.85rem; color:var(--text-muted); border:1px solid var(--border-card);">
            📝 <strong>Editable Field:</strong> ${child.birthDate} | ${child.favorites}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Challenges Framework (4-step)
  const challengesGrid = document.getElementById('challenges-framework-grid');
  if (challengesGrid && data.challenges) {
    challengesGrid.innerHTML = data.challenges.framework.map((step, idx) => `
      <div class="framework-step-card reveal-on-scroll">
        <div class="framework-step-num">0${idx + 1}</div>
        <h4>${step.phase}</h4>
        <p style="font-size:0.94rem; color:var(--text-secondary); line-height:1.65; margin-bottom:0;">${step.desc}</p>
      </div>
    `).join('');
  }

  // Values Grid
  const valuesGrid = document.getElementById('values-grid');
  if (valuesGrid && data.values) {
    valuesGrid.innerHTML = data.values.map(val => `
      <div class="editorial-card reveal-on-scroll">
        <div style="font-size: 1.8rem; margin-bottom: 0.8rem;">⭐</div>
        <h3>${val.name}</h3>
        <p style="margin-bottom:0;">${val.desc}</p>
      </div>
    `).join('');
  }

  // Lessons Grid
  const lessonsGrid = document.getElementById('lessons-grid');
  if (lessonsGrid && data.lifeLessons) {
    lessonsGrid.innerHTML = data.lifeLessons.map(les => `
      <div class="editorial-card reveal-on-scroll" style="display:flex; flex-direction:column; justify-content:space-between;">
        <div class="quote-highlight" style="font-size:1.15rem; margin-top:0;">“${les.quote}”</div>
        <div style="font-size:0.82rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-gold);">${les.context}</div>
      </div>
    `).join('');
  }

  // Future Aspirations Grid
  const futureGrid = document.getElementById('future-aspirations-grid');
  if (futureGrid && data.future) {
    futureGrid.innerHTML = data.future.aspirations.map(asp => `
      <div class="editorial-card reveal-on-scroll">
        <span class="section-tag" style="font-size:0.72rem; margin-bottom:0.8rem;">Vision</span>
        <h3>${asp.area}</h3>
        <p style="margin-bottom:0;">${asp.desc}</p>
      </div>
    `).join('');
  }
}

/**
 * ----------------------------------------------------------------------------
 * AMBIENT SOUNDSCAPE ENGINE (Web Audio API Meditative Chimes)
 * ----------------------------------------------------------------------------
 */
function initAmbientAudio() {
  const btn = document.getElementById('ambient-sound-btn');
  if (!btn) return;

  let audioCtx = null;
  let isPlaying = false;
  let timerId = null;
  let masterGain = null;

  // Harmonious pentatonic ambient frequencies in 432Hz tuning (Cmaj9 / Fmaj7)
  const notes = [
    130.81, 164.81, 196.00, 246.94, 261.63, 329.63, 392.00, 493.88, 523.25, 659.25
  ];

  function playSoftChime() {
    if (!isPlaying || !audioCtx) return;

    try {
      const freq = notes[Math.floor(Math.random() * notes.length)];
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = Math.random() > 0.4 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Soft envelope for warm meditation sound
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 6.5);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(audioCtx.currentTime + 6.6);
    } catch (err) {
      console.warn('Ambient chime error:', err);
    }

    if (isPlaying) {
      const delay = 1500 + Math.random() * 2200;
      timerId = setTimeout(playSoftChime, delay);
    }
  }

  function startAmbientSound() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = true;
    btn.classList.add('is-playing');
    btn.innerHTML = '🎶';
    btn.setAttribute('title', 'Mute Ambient Music');
    btn.setAttribute('aria-label', 'Mute Ambient Music');

    playSoftChime();
    setTimeout(playSoftChime, 800);
  }

  function stopAmbientSound() {
    isPlaying = false;
    if (timerId) clearTimeout(timerId);
    btn.classList.remove('is-playing');
    btn.innerHTML = '🎵';
    btn.setAttribute('title', 'Play Soft Ambient Music');
    btn.setAttribute('aria-label', 'Play Soft Ambient Music');

    if (audioCtx && masterGain) {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
    }
  }

  btn.addEventListener('click', () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  });
}
