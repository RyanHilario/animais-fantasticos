import SmoothScroll from "./module/scroll-suave.js";
import initScrollAnimation from "./module/scroll-animacao.js";
import initAccordionFaq from "./module/accordion.js";
import initTabNav from "./module/tabnav.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFecthAnimais from "./module/fetch-animais.js";
import initFetchBitcoin from "./module/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

initScrollAnimation();
initAccordionFaq();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFecthAnimais();
initFetchBitcoin();
