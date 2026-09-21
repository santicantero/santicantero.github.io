'use strict';
// Keep all content accessible without JavaScript; animate only after enhancement.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.about-layout, .principles, .section-heading, .project-card, .tech-grid').forEach(element => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
let resetStatus;
copyButton.addEventListener('click', async () => {
  clearTimeout(resetStatus);
  try {
    await navigator.clipboard.writeText('santiagocanterotorrents@gmail.com');
    copyStatus.textContent = '¡Email copiado!';
  } catch {
    copyStatus.textContent = 'Puedes seleccionar el email y copiarlo, o pulsarlo para escribirme.';
  }
  resetStatus = setTimeout(() => { copyStatus.textContent = ''; }, 6000);
});

// Decorative sequence: the underlying example remains readable when paused.
const workflow = document.querySelector('.workflow-art');
const workflowToggle = document.querySelector('.workflow-toggle');
if (workflow && workflowToggle) {
  let pausedByUser = false;
  function syncWorkflowMotion() {
    const paused = pausedByUser || reducedMotion.matches;
    workflow.classList.toggle('is-paused', paused);
    workflowToggle.hidden = reducedMotion.matches;
    workflowToggle.setAttribute('aria-pressed', String(pausedByUser));
    workflowToggle.textContent = pausedByUser ? 'Reanudar animación' : 'Pausar animación';
  }
  workflowToggle.addEventListener('click', () => {
    pausedByUser = !pausedByUser;
    syncWorkflowMotion();
  });
  reducedMotion.addEventListener('change', syncWorkflowMotion);
  syncWorkflowMotion();
}
