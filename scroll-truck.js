const truck = document.getElementById("scroll-truck");

if (truck) {
    let previousScrollY = window.scrollY;
    let direction = 1;

    function updateTruckPosition() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > previousScrollY) {
            direction = -1; // face left while scrolling down
        } else if (currentScrollY < previousScrollY) {
            direction = 1; // face right while scrolling up
        }

        previousScrollY = currentScrollY;

        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0
            ? Math.min(1, Math.max(0, currentScrollY / maxScroll))
            : 0;
        const maxTravel = window.innerWidth - truck.offsetWidth - 24;
        const distance = progress * Math.max(0, maxTravel);

        truck.style.transform =
            `translateX(${distance}px) scaleX(${direction})`;
    }

    window.addEventListener("scroll", updateTruckPosition, { passive: true });
    window.addEventListener("resize", updateTruckPosition);
    updateTruckPosition();
}