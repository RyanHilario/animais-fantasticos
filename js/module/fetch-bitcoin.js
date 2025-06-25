export default function fetchBitcoin() {}

fetch("https://www.blockchain.com/tickers")
  .then((r) => r.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / bitcoin.BTC.BRL.sell).toFixed(5);
  })
  .catch((erro) => {
    console.log(erro);
  });
