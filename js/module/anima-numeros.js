export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    if (numeros.length) {
      numeros.forEach((numero) => {
        const total = +numero.innerText;
        const incremento = Math.max(1, Math.floor(total / 100));

        let start = 0;
        const timer = setInterval(() => {
          start += incremento;
          numero.innerText = start;
          if (start >= total) {
            numero.innerText = total;
            clearInterval(timer);
          }
        }, 25 * Math.random());
      });
    }
  }

  const observeTarget = document.querySelector(".numeros");

  if (observeTarget) {
    function handleMutation(mutations) {
      if (mutations[0].target.classList.contains("ativo")) {
        observer.disconnect();
        animaNumeros();
      }
    }

    const observer = new MutationObserver(handleMutation);
    observer.observe(observeTarget, { attributes: true });
  }
}
