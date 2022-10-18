const container = document.querySelector(".container");
const tun = document.querySelector(".tun");
const kun = document.querySelector(".kun");
const body = document.querySelector(".body");
container.addEventListener("click", () => {
    tun.classList.toggle("tun-none");
    kun.classList.toggle("kun-active");
    container.classList.toggle("container-border");
    body.classList.toggle("body");
})