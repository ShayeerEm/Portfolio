/* Full-page photo carousel for a single Drive-backed album.
   Reads ?album=<slug> from the URL and drives the DOM built in
   album.html against the PHOTO_ALBUMS data (js/photo-data.js). */
(function () {
  // This page is always dark regardless of the visitor's stored site-wide
  // theme preference — main.js applies that preference on DOMContentLoaded,
  // so reassert dark here (registered after main.js's listener, so it wins).
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });

  if (typeof PHOTO_ALBUMS === 'undefined') return;

  const params   = new URLSearchParams(window.location.search);
  const slug     = params.get('album');
  const album    = PHOTO_ALBUMS[slug];

  const titleEl    = document.getElementById('carousel-title');
  const counterEl  = document.getElementById('carousel-counter');
  const imageEl    = document.getElementById('carousel-image');
  const spinnerEl  = document.getElementById('carousel-spinner');
  const prevBtn    = document.getElementById('carousel-prev');
  const nextBtn    = document.getElementById('carousel-next');
  const progressFill = document.getElementById('carousel-progress-fill');
  const stage      = document.querySelector('.carousel-stage');

  if (!album) {
    // Unknown or missing album — send visitors back rather than show a dead page.
    window.location.replace('portfolio.html');
    return;
  }

  document.title = `${album.label} — Shayeer Emanee`;
  titleEl.textContent = album.label;

  let index = 0;
  const total = album.ids.length;

  function thumbUrl(id, size) {
    return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
  }

  function preload(i) {
    if (i < 0 || i >= total) return;
    const img = new Image();
    img.src = thumbUrl(album.ids[i], 1920);
  }

  function render() {
    const id = album.ids[index];
    imageEl.classList.remove('is-visible');
    spinnerEl.classList.remove('is-hidden');
    imageEl.alt = `${album.label} photograph ${index + 1} of ${total}`;

    const loader = new Image();
    loader.onload = () => {
      imageEl.src = loader.src;
      imageEl.classList.add('is-visible');
      spinnerEl.classList.add('is-hidden');
    };
    loader.src = thumbUrl(id, 1920);

    counterEl.textContent = `${index + 1} / ${total}`;
    progressFill.style.width = `${((index + 1) / total) * 100}%`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;

    preload(index + 1);
    preload(index - 1);
  }

  function go(delta) {
    const next = index + delta;
    if (next < 0 || next >= total) return;
    index = next;
    render();
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'Escape') window.location.href = 'portfolio.html';
  });

  // Basic touch swipe support.
  let touchStartX = null;
  stage.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX = null;
  }, { passive: true });

  render();
})();
