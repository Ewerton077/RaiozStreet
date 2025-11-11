// Aguarda DOM (opcional se o script estiver no final do body, mas é mais seguro)
document.addEventListener('DOMContentLoaded', () => {

  // --- Menu hambúrguer ---
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  }

  // --- Barra de pesquisa funcional ---
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  function filterCards(term) {
    const cards = document.querySelectorAll('.card');
    const q = term.trim().toLowerCase();

    cards.forEach(card => {
      const h3 = card.querySelector('h3');
      const productName = h3 ? h3.textContent.toLowerCase() : '';
      // Se busca vazia, mostra todos
      if (!q || productName.includes(q)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchForm && searchInput) {
    // Busca ao submeter o form
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      filterCards(searchInput.value);
    });

    // Busca em tempo real enquanto digita (opcional, melhora UX)
    searchInput.addEventListener('input', () => {
      filterCards(searchInput.value);
    });
  }

});
