/**
 * ============================================================================
 * ADVANCED ANIMATIONS, PARTICLES & SOUNDSCAPE MODULE
 * ============================================================================
 */

function initAnimations() {
  // 1. Interactive Canvas Particle Backdrop
  initParticleCanvas();

  // 2. Reading Progress Bar
  const progressBar = document.getElementById('reading-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && progressBar) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    }
  }, { passive: true });

  // 3. IntersectionObserver for Reveal-on-Scroll
  let revealObserver;
  function observeRevealElements() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });
    }

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 4. Animated Metric Counters
  let counterObserver;
  function initCounters() {
    const counters = document.querySelectorAll('.count-up:not(.counted)');
    if (!('IntersectionObserver' in window)) {
      counters.forEach(counter => {
        counter.textContent = counter.getAttribute('data-target') || counter.textContent;
      });
      return;
    }

    counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          if (isNaN(target)) return;

          let current = 0;
          const duration = 1600;
          const stepTime = 20;
          const increment = target / (duration / stepTime);

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target + suffix;
              clearInterval(timer);
              el.classList.add('counted');
            } else {
              el.textContent = Math.floor(current) + suffix;
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // 5. 3D Tilt Effect on Editorial Cards (Desktop)
  if (window.innerWidth > 992) {
    document.querySelectorAll('.editorial-card, .hero-portrait-card, .metric-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / rect.height) * -8;
        const tiltY = (x / rect.width) * 8;
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 6. Ambient Soundscape Synthesizer (Web Audio API)
  initAmbientSound();

  window.observeRevealElements = observeRevealElements;
  window.initCounters = initCounters;

  observeRevealElements();
  initCounters();
}

/**
 * ----------------------------------------------------------------------------
 * PARTICLE CANVAS BACKDROP
 * ----------------------------------------------------------------------------
 */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 25), 45);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'rainbow';
    const isRainbow = currentTheme === 'rainbow';
    const isDark = currentTheme !== 'light';
    const defaultColor = isDark ? '245, 166, 35' : '194, 120, 3';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      
      let fillStyle = `rgba(${defaultColor}, ${p.alpha})`;
      if (isRainbow) {
        const hue = (i * 15 + Date.now() * 0.03) % 360;
        fillStyle = `hsla(${hue}, 90%, 65%, ${p.alpha})`;
      }
      ctx.fillStyle = fillStyle;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);

          let strokeStyle = `rgba(${defaultColor}, ${0.12 * (1 - dist / 110)})`;
          if (isRainbow) {
            const lineHue = (i * 15 + Date.now() * 0.03) % 360;
            strokeStyle = `hsla(${lineHue}, 90%, 65%, ${0.22 * (1 - dist / 110)})`;
          }
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * ----------------------------------------------------------------------------
 * AMBIENT SOUNDSCAPE SYNTHESIZER (ZERO EXTERNAL MP3s)
 * ----------------------------------------------------------------------------
 */
let audioCtx = null;
let isAudioPlaying = false;
let ambientOscillators = [];

function initAmbientSound() {
  const soundBtn = document.getElementById('ambient-sound-btn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (!isAudioPlaying) {
      startAmbientAudio();
      soundBtn.innerHTML = '🔊';
      soundBtn.setAttribute('title', 'Mute Ambient Soundscape');
      soundBtn.classList.add('playing');
      isAudioPlaying = true;
    } else {
      stopAmbientAudio();
      soundBtn.innerHTML = '🎵';
      soundBtn.setAttribute('title', 'Play Calm Soundscape');
      soundBtn.classList.remove('playing');
      isAudioPlaying = false;
    }
  });
}

function startAmbientAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Create soothing harmonic chord drones (Pentatonic peaceful harmony)
    const freqs = [196, 293.66, 392, 440]; // G3, D4, G4, A4
    ambientOscillators = freqs.map(freq => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.015, audioCtx.currentTime + 3);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();

      return { osc, gain };
    });
  } catch (e) {
    console.warn('Audio autoplay blocked or unsupported:', e);
  }
}

function stopAmbientAudio() {
  if (ambientOscillators.length && audioCtx) {
    ambientOscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
        setTimeout(() => osc.stop(), 1000);
      } catch (err) {}
    });
    ambientOscillators = [];
  }
}

window.initAnimations = initAnimations;
