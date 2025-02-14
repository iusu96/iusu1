document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("mouseover", () => {
        ctaButton.style.boxShadow = "0px 0px 15px rgba(0, 198, 255, 0.8)";
    });

    ctaButton.addEventListener("mouseleave", () => {
        ctaButton.style.boxShadow = "none";
    });
});
