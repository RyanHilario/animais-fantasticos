export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    console.log();
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
    activeTab(0);
  }
}
