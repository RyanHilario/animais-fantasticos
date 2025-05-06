export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && modalContainer) {
    function toggleMenu(event) {
      event.preventDefault();
      const estaAtivo = modalContainer.classList.toggle("ativo");

      if (estaAtivo) {
        window.addEventListener("keydown", apertarEsc);
      } else {
        window.removeEventListener("keydown", apertarEsc);
      }
    }

    function cliqueFora(event) {
      if (event.target === this) {
        toggleMenu(event);
      }
    }

    function apertarEsc(event) {
      if (
        event.key === "Escape" &&
        modalContainer.classList.contains("ativo")
      ) {
        toggleMenu(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleMenu);
    botaoFechar.addEventListener("click", toggleMenu);
    modalContainer.addEventListener("click", cliqueFora);
  }
}
