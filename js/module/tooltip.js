export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  if (tooltips.length) {
    function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this);
      tooltipBox.style.top = event.pageY + "px";
      tooltipBox.style.left = event.pageX + "px";

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener("mousemove", onMouseMove);
    }

    const onMouseLeave = {
      tooltipBox: "",
      element: "",
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
      },
    };

    function criarTooltipBox(element) {
      const text = element.getAttribute("aria-label");

      const tooltipBox = document.createElement("div");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;

      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", onMouseOver);
    });
  }
}
