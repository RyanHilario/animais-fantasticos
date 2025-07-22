import SmoothScroll from "./module/scroll-suave.js";
import AccordionFaq from "./module/accordion.js";
import TabNav from "./module/tabnav.js";
import Modal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFecthAnimais from "./module/fetch-animais.js";
import initFetchBitcoin from "./module/fetch-bitcoin.js";
import initScrollAnimation from "./module/scroll-animacao.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

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

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFecthAnimais();
initFetchBitcoin();
initScrollAnimation();
