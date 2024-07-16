document.addEventListener('DOMContentLoaded', () => {
    // GSAP animation for initial loading with a bouncy effect
    gsap.from(".card", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "elastic.out(1, 0.75)"  // Bouncy effect
    });

    // GSAP animation for mouse moving effect
    document.querySelectorAll('.card').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            gsap.to(item, {
                duration: 0.1,
                scale: 1.02,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                ease: "power3"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.1,
                scale: 1,
                boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
                ease: "power3"
            });
        });
    });
});
