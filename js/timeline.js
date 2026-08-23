/**
 * ============================================================================
 * TIMELINE-FIRST STORYBOOK MODULE WITH CHAPTER MODAL POPUPS
 * ============================================================================
 */

function initTimeline() {
  const container = document.getElementById('timeline-items-container');
  if (!container || !window.personalData) return;

  const events = window.personalData.timelineEvents || [];
  let currentMilestoneIndex = 0;

  // Chapter Modal Elements
  const modalOverlay = document.getElementById('chapter-modal');
  const modalCloseBtn = document.getElementById('chapter-modal-close-btn');
  const modalCategoryBadge = document.getElementById('modal-category-badge');
  const modalYearBadge = document.getElementById('modal-year-badge');
  const modalLocationBadge = document.getElementById('modal-location-badge');
  const modalChapterTitle = document.getElementById('modal-chapter-title');
  const modalStatsBadge = document.getElementById('modal-stats-badge');
  const modalChapterImg = document.getElementById('modal-chapter-img');
  const modalChapterImgCaption = document.getElementById('modal-chapter-img-caption');
  const modalQuoteBox = document.getElementById('modal-quote-box');
  const modalStoryParagraphs = document.getElementById('modal-story-paragraphs');
  const modalTakeawaysList = document.getElementById('modal-takeaways-list');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');
  const modalStepIndicator = document.getElementById('modal-step-indicator');

  // Render Timeline Cards
  function renderEvents(filter = 'all') {
    container.innerHTML = '';

    const filtered = filter === 'all'
      ? events
      : events.filter(e => e.category === filter);

    filtered.forEach((event, index) => {
      const originalIndex = events.findIndex(e => e.id === event.id);
      const item = document.createElement('div');
      item.className = 'timeline-item reveal-on-scroll';
      item.setAttribute('data-category', event.category);

      item.innerHTML = `
        <div class="timeline-node" aria-hidden="true">${event.icon || '✨'}</div>
        <div class="timeline-card clickable-chapter-card" data-index="${originalIndex}">
          <div class="timeline-card-header">
            <span class="timeline-year-badge">${event.year}</span>
            <span class="timeline-tag">${event.categoryLabel || event.tag}</span>
            <span class="timeline-location-pill">📍 ${event.location}</span>
          </div>

          <div class="timeline-card-preview-grid">
            <div class="timeline-thumbnail-wrap">
              <img src="${event.thumbnail}" alt="${event.title}" loading="lazy" class="timeline-card-thumb" />
            </div>
            <div class="timeline-card-info">
              <h3 class="timeline-card-title">${event.title}</h3>
              <p class="timeline-card-summary">${event.summary}</p>
            </div>
          </div>

          <div class="timeline-card-footer">
            <span class="explore-chapter-btn">
              <span>📖</span> Explore Full Chapter & Lessons <span>↗</span>
            </span>
          </div>
        </div>
      `;

      // Click card to open modal
      const card = item.querySelector('.timeline-card');
      card.addEventListener('click', () => {
        openChapterModal(originalIndex);
      });

      container.appendChild(item);
    });

    // Re-observe revealed elements
    if (window.observeRevealElements) {
      window.observeRevealElements();
    }
  }

  // Open Chapter Modal
  function openChapterModal(index) {
    if (index < 0 || index >= events.length) return;
    currentMilestoneIndex = index;
    const event = events[index];

    // Populate header badges & text
    if (modalCategoryBadge) modalCategoryBadge.textContent = event.categoryLabel || event.tag;
    if (modalYearBadge) modalYearBadge.textContent = event.date || event.year;
    if (modalLocationBadge) modalLocationBadge.textContent = `📍 ${event.location}`;
    if (modalChapterTitle) modalChapterTitle.textContent = event.title;
    if (modalStatsBadge) modalStatsBadge.textContent = event.statsBadge || `${event.year} Milestone`;

    // Populate Image & Caption
    if (modalChapterImg) {
      modalChapterImg.src = event.thumbnail || 'assets/images/roots/family-roots.jpg';
      modalChapterImg.alt = event.title;
    }
    if (modalChapterImgCaption) {
      modalChapterImgCaption.textContent = `${event.title} • ${event.location}`;
    }

    // Populate Quote
    if (modalQuoteBox) {
      const rawQuote = event.quote || '“Every milestone holds a lesson that echoes across decades.”';
      modalQuoteBox.innerHTML = window.parseMarkdown ? window.parseMarkdown(rawQuote) : rawQuote;
    }

    // Populate Story Paragraphs & Work Experience Sub-Timeline Branch
    if (modalStoryParagraphs) {
      modalStoryParagraphs.innerHTML = '';
      if (event.storyParagraphs && event.storyParagraphs.length > 0) {
        event.storyParagraphs.forEach(para => {
          const p = document.createElement('p');
          p.innerHTML = window.parseMarkdown ? window.parseMarkdown(para) : para;
          modalStoryParagraphs.appendChild(p);
        });
      } else {
        const p = document.createElement('p');
        p.innerHTML = window.parseMarkdown ? window.parseMarkdown(event.summary) : event.summary;
        modalStoryParagraphs.appendChild(p);
      }

      // If this event has Work Experience Branches (Career Timeline), render the Branching Sub-Timeline!
      if (event.workBranches && event.workBranches.length > 0) {
        const branchContainer = document.createElement('div');
        branchContainer.className = 'career-branching-timeline';
        branchContainer.innerHTML = `
          <div class="career-branching-header">
            <h3>💼 Career & Work Experience Sub-Timeline</h3>
            <p>Chronological career progression across premier technology organizations</p>
          </div>
          <div class="career-branching-tree">
            ${event.workBranches.map(branch => `
              <div class="career-branch-node">
                <div class="branch-node-marker">${branch.icon || '💼'}</div>
                <div class="branch-node-content">
                  <div class="branch-top-bar">
                    <div class="branch-company-name">${branch.company}</div>
                    <div class="branch-period-badge">${branch.period}</div>
                  </div>
                  <div class="branch-role-title">${branch.role} <span class="branch-emp-type">• ${branch.employmentType}</span></div>
                  <div class="branch-location">📍 ${branch.location}</div>
                  <p class="branch-summary">${branch.summary}</p>
                  <div class="branch-skills-wrap">
                    ${(branch.skills || []).map(skill => `<span class="branch-skill-badge">${skill}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        modalStoryParagraphs.appendChild(branchContainer);
      }
    }

    // Populate Takeaways
    if (modalTakeawaysList) {
      modalTakeawaysList.innerHTML = '';
      if (event.takeaways && event.takeaways.length > 0) {
        event.takeaways.forEach(takeaway => {
          const li = document.createElement('li');
          li.className = 'modal-takeaway-item';
          const parsed = window.parseMarkdown ? window.parseMarkdown(takeaway) : takeaway;
          li.innerHTML = `<span class="takeaway-bullet">⭐</span> <span>${parsed}</span>`;
          modalTakeawaysList.appendChild(li);
        });
      }
    }

    // Update Stepper Navigation
    if (modalStepIndicator) {
      modalStepIndicator.textContent = `Chapter ${index + 1} of ${events.length}`;
    }
    if (modalPrevBtn) {
      modalPrevBtn.disabled = index === 0;
    }
    if (modalNextBtn) {
      modalNextBtn.disabled = index === events.length - 1;
    }

    // Open Modal
    if (modalOverlay) {
      modalOverlay.classList.add('visible');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  // Close Chapter Modal
  function closeChapterModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('visible');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // Modal Button Handlers
  modalCloseBtn?.addEventListener('click', closeChapterModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeChapterModal();
    }
  });

  modalPrevBtn?.addEventListener('click', () => {
    if (currentMilestoneIndex > 0) {
      openChapterModal(currentMilestoneIndex - 1);
    }
  });

  modalNextBtn?.addEventListener('click', () => {
    if (currentMilestoneIndex < events.length - 1) {
      openChapterModal(currentMilestoneIndex + 1);
    }
  });

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (!modalOverlay?.classList.contains('visible')) return;

    if (e.key === 'Escape') {
      closeChapterModal();
    } else if (e.key === 'ArrowLeft' && currentMilestoneIndex > 0) {
      openChapterModal(currentMilestoneIndex - 1);
    } else if (e.key === 'ArrowRight' && currentMilestoneIndex < events.length - 1) {
      openChapterModal(currentMilestoneIndex + 1);
    }
  });

  // Initial render
  renderEvents('all');

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.timeline-filter-buttons .filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetCategory = btn.getAttribute('data-filter');
      renderEvents(targetCategory);
    });
  });
}

window.initTimeline = initTimeline;
