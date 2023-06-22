function openMenu(x) {
    x.classList.toggle("change");
    document.getElementById("menusmall").classList.toggle("show");
}
function initial() {
    let check = document.getElementById("checkbox");
    check.checked = true;
}
function changeMode(val) {
    let element = document.getElementById("sliderbg");
    let text = document.getElementById("slidetext");
    let night = document.getElementById("containernight");
    let day = document.getElementById("containerday");
    let banner = document.getElementById("imageonbanner");
    let time = document.getElementById("time");
    let root = document.querySelector(":root");
    if (val) {
        element.style.setProperty("--bg-bgi", "url('../imgs/moon.svg')");
        element.style.setProperty("--bg-bgico", "#0C1933");
        text.innerHTML = "Go check whats going on BY NIGHT";
        text.style.color = "#ccc";
        night.classList.add("hidden");
        night.removeAttribute("open");
        day.setAttribute("open", "");
        banner.setAttribute("src", "imgs/cover-daylife.jpg");
        banner.setAttribute("open", "");
        banner.addEventListener(
            "animationend",
            () => {
                banner.removeAttribute("open");
            },
            { once: true }
        );
        time.innerHTML = "BY DAY";
        root.style.setProperty("--primary-color", "white");
        root.style.setProperty("--secondary-color", "#0C1933");
        root.style.setProperty("--terciary-color", "#007955");
        root.style.setProperty("--terciary-complementary", "#266451c5");
    } else {
        element.style.setProperty("--bg-bgi", "url('../imgs/sun.svg')");
        element.style.setProperty("--bg-bgico", "#ccc");
        text.innerHTML = "Go check whats going on BY DAY";
        text.style.color = "#0C1933";
        day.classList.add("hidden");
        day.removeAttribute("open");
        night.setAttribute("open", "");
        banner.setAttribute("src", "imgs/vancouvernight.jpg");
        banner.setAttribute("open", "");
        banner.addEventListener(
            "animationend",
            () => {
                banner.removeAttribute("open");
            },
            { once: true }
        );
        time.innerHTML = "BY NIGHT";
        root.style.setProperty("--primary-color", "#0C1933");
        root.style.setProperty("--secondary-color", "white");
        root.style.setProperty("--terciary-color", "orange");
        root.style.setProperty("--terciary-complementary", "#d59621d5");
    }
}

window.addEventListener("load", () => {
    const d = new Date();
    let hour = d.getHours();
    if (hour > 6 && hour < 16) {
        changeMode(true);
        initial();
    } else {
        changeMode(false);
    }
});
