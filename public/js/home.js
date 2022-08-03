// Parallax
if ($(window).width() >= 992) {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".sf-parallax img").forEach((shift) => {
            const position = shift.getAttribute("data-value");

            const x = (window.innerWidth - event.pageX * position) / 40;
            const y = (window.innerHeight - event.pageY * position) / 25;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}