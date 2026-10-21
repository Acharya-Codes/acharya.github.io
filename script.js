
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
