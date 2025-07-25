import ScrollSuave from "./module/scroll-suave.js";
import AccordionFaq from "./module/accordion.js";
import TabNav from "./module/tabnav.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import DropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import fecthAnimais from "./module/fetch-animais.js";
import fetchBitcoin from "./module/fetch-bitcoin.js";
import ScrollAnima from "./module/scroll-anima.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordionFaq = new AccordionFaq('[data-anime="accordion"] dt');
accordionFaq.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

initMenuMobile();
initFuncionamento();

fecthAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://www.blockchain.com/tickers", ".btc-preco");
