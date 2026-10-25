window.addEventListener("resize", () => {
    const nav = document.getElementById("main-nav");
    if (window.innerWidth > 768){
        nav.classList.remove("open");
    }
});