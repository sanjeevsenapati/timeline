/**
 * ============================================================================
 * GALLERY & PHOTO LIGHTBOX MODULE
 * ============================================================================
 */

function initGalleryModal() {
  const modalOverlay = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalSub = document.getElementById('modal-sub');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  function openModal(imgSrc, title, subtitle) {
    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = title || 'Life Chapter Memory';
    if (modalSub) modalSub.textContent = subtitle || 'Sanjeev Senapati • Digital Autobiography';

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach click listeners to all photo frames
  document.querySelectorAll('.photo-frame-card, .clickable-photo').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || card.querySelector('h3, h4')?.textContent;
      const subtitle = card.getAttribute('data-subtitle') || card.querySelector('p')?.textContent;
      if (img) {
        openModal(img.src, title, subtitle);
      }
    });
  });

  window.openPhotoModal = openModal;
}

window.initGalleryModal = initGalleryModal;
