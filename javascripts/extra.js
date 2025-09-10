document.addEventListener('DOMContentLoaded', function() {
  // Forzar la visualización de TOC en todas las páginas
  const toc = document.querySelector('.md-sidebar--secondary');
  if (toc) {
    toc.style.display = 'block';
  }
});