const toggle = document.getElementById('toggle');
const navlinks = document.getElementById('navlinks');
const myli1 = document.querySelector(".myli1");
const myli2 = document.querySelector(".myli2");
const myli3 = document.querySelector(".myli3");
const myli4 = document.querySelector(".myli4");
myli1.onclick = function () {
    navlinks.classList.remove("active");
}
myli2.onclick = function () {
    navlinks.classList.remove("active");
}
myli3.onclick = function () {
    navlinks.classList.remove("active");
}
myli4.onclick = function () {
    navlinks.classList.remove("active");
}
toggle.onclick = function () {
    toggle.classList.toggle("active");
    navlinks.classList.toggle("active");
}