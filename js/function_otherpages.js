function openMenu(x) {
    x.classList.toggle("change");
    document.getElementById("menusmall").classList.toggle("show");
}
function changeMode(val) {
    let root = document.querySelector(":root");
    if (val) {
        root.style.setProperty("--primary-color", "white");
        root.style.setProperty("--secondary-color", "#0C1933");
        root.style.setProperty("--terciary-color", "#007955");
        root.style.setProperty("--terciary-complementary", "#266451c5");
    } else {
        root.style.setProperty("--primary-color", "#0C1933");
        root.style.setProperty("--secondary-color", "white");
        root.style.setProperty("--terciary-color", "orange");
        root.style.setProperty("--terciary-complementary", "#d59621d5");
    }
}

window.addEventListener("load", () => {
    if (sessionStorage.getItem("time") == "Day") {
        changeMode(true);
    } else {
        changeMode(false);
    }
});
