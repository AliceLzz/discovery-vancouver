function openMenu(x) {
    x.classList.toggle("change");
    document.getElementById("menusmall").classList.toggle("show");
}

function changeMode(item) {
    let element = document.getElementById("sliderbg");
    let text = document.getElementById("slidetext");
    if (item.checked) {
        element.style.setProperty("--bg-bgi", "url('../imgs/moon.svg')");
        element.style.setProperty("--bg-bgico", "#0C1933");
        text.innerHTML = "Go check whats going on IN DAY";
        text.style.color = "#ccc";
    } else {
        element.style.setProperty("--bg-bgi", "url('../imgs/sun.svg')");
        element.style.setProperty("--bg-bgico", "#ccc");
        text.innerHTML = "Go check whats going on AT NIGHT";
        text.style.color = "#0C1933";
    }
}
