export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoin.BTC.BRL.sell).toFixed(5);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
