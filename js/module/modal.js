export default class Modal {
  constructor(botaoAbrir, botaoFechar, modalContainer) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(modalContainer);

    // bind this ao callback para
    // facer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
    this.fecharModalEsc = this.fecharModalEsc.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    const estaAtivo = this.modalContainer.classList.toggle("ativo");

    if (estaAtivo) {
      window.addEventListener("keydown", this.fecharModalEsc);
    } else {
      window.removeEventListener("keydown", this.fecharModalEsc);
    }
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  // fecha modal ao aperar a tecla ESC
  fecharModalEsc(event) {
    if (
      event.key === "Escape" &&
      this.modalContainer.classList.contains("ativo")
    ) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
