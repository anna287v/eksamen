window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    /* document.querySelector("#play-pause").addEventListener("click", play);*/
}

function toggleMenu() {
    console.log("toggleMenu");


    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult != true) {
        console.log("true");
        document.querySelector("#menu").classList.add("hidden");
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        console.log("false");
        document.querySelector("#menu").classList.remove("hidden");
        document.querySelector("#menuknap").textContent = "X";
    }
}
