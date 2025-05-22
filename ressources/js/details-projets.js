
//Initialisation des boutons pour fermer la fenetre
    let btn_close1 = document.getElementById("btn-close1");
    let btn_close2 = document.getElementById("btn-close2");
    let btn_close7 = document.getElementById("btn-close7");
    let btn_close8 = document.getElementById("btn-close8");
    let btn_close10 = document.getElementById("btn-close10");
    let btn_close11 = document.getElementById("btn-close11");
    let btn_close13 = document.getElementById("btn-close13");
    let btn_close14 = document.getElementById("btn-close14");
    let btn_close15 = document.getElementById("btn-close15");

//Bouton pour ouvrir la fenetre des détils
    let btn_div1 = document.getElementById("btn_div1");
    let btn_div2 = document.getElementById("btn_div2");
    let btn_div7 = document.getElementById("btn_div7");
    let btn_div8 = document.getElementById("btn_div8");
    let btn_div10 = document.getElementById("btn_div10");
    let btn_div11 = document.getElementById("btn_div11");
    let btn_div12 = document.getElementById("btn_div12");
    let btn_div13 = document.getElementById("btn_div13");
    let btn_div14 = document.getElementById("btn_div14");
    let btn_div15 = document.getElementById("btn_div15");

//Les fenetres des details
    let d_div1 = document.getElementById("d_div1");
    let d_div2 = document.getElementById("d_div2");
    let d_div7 = document.getElementById("d_div7");
    let d_div8 = document.getElementById("d_div8");
    let d_div10 = document.getElementById("d_div10");
    let d_div11 = document.getElementById("d_div11");
    let d_div13 = document.getElementById("d_div13");
    let d_div14 = document.getElementById("d_div14");
    let d_div15 = document.getElementById("d_div15");

//Debut des fonctions pour les boutons
//Fermer la fenetre des details
    btn_close1.addEventListener("click", () => {
        if(getComputedStyle(d_div1).visibility != "visible"){
            d_div1.style.visibility = "visible";
        }else{
            d_div1.style.visibility = "hidden";
        }
    });btn_close2.addEventListener("click", () => {
        if(getComputedStyle(d_div2).visibility != "visible"){
            d_div2.style.visibility = "visible";
        }else{
            d_div2.style.visibility = "hidden";
        }
    });btn_close7.addEventListener("click", () => {
        if(getComputedStyle(d_div7).visibility != "visible"){
            d_div7.style.visibility = "visible";
        }else{
            d_div7.style.visibility = "hidden";
        }
    });btn_close8.addEventListener("click", () => {
        if(getComputedStyle(d_div8).visibility != "visible"){
            d_div8.style.visibility = "visible";
        }else{
            d_div8.style.visibility = "hidden";
        }
    });btn_close10.addEventListener("click", () => {
        if(getComputedStyle(d_div10).visibility != "visible"){
            d_div10.style.visibility = "visible";
        }else{
            d_div10.style.visibility = "hidden";
        }
    });btn_close11.addEventListener("click", () => {
        if(getComputedStyle(d_div11).visibility != "visible"){
            d_div11.style.visibility = "visible";
        }else{
            d_div11.style.visibility = "hidden";
        }
    });btn_close13.addEventListener("click", () => {
        if(getComputedStyle(d_div13).visibility != "visible"){
            d_div13.style.visibility = "visible";
        }else{
            d_div13.style.visibility = "hidden";
        }
    });btn_close14.addEventListener("click", () => {
        if(getComputedStyle(d_div14).visibility != "visible"){
            d_div14.style.visibility = "visible";
        }else{
            d_div14.style.visibility = "hidden";
        }
    });btn_close15.addEventListener("click", () => {
        if(getComputedStyle(d_div15).visibility != "visible"){
            d_div15.style.visibility = "visible";
        }else{
            d_div15.style.visibility = "hidden";
        }
    });

//Debut des fonctions pour les boutons pour ouvrir la fenetre des details
//Les fenetres details
    btn_div1.addEventListener("click", () => {
        if(getComputedStyle(d_div1).visibility != "visible"){
            d_div1.style.visibility = "visible";
        }else{
            d_div1.style.visibility = "hidden";
        }
    });btn_div2.addEventListener("click", () => {
        if(getComputedStyle(d_div1).visibility != "visible"){
            d_div2.style.visibility = "visible";
        }else{
            d_div2.style.visibility = "hidden";
        }
    });btn_div7.addEventListener("click", () => {
        if(getComputedStyle(d_div7).visibility != "visible"){
            d_div7.style.visibility = "visible";
        }else{
            d_div7.style.visibility = "hidden";
        }
    });btn_div8.addEventListener("click", () => {
        if(getComputedStyle(d_div8).visibility != "visible"){
            d_div8.style.visibility = "visible";
        }else{
            d_div8.style.visibility = "hidden";
        }
    });btn_div10.addEventListener("click", () => {
        if(getComputedStyle(d_div10).visibility != "visible"){
            d_div10.style.visibility = "visible";
        }else{
            d_div10.style.visibility = "hidden";
        }
    });btn_div11.addEventListener("click", () => {
        if(getComputedStyle(d_div11).visibility != "visible"){
            d_div11.style.visibility = "visible";
        }else{
            d_div11.style.visibility = "hidden";
        }
    });btn_div13.addEventListener("click", () => {
        if(getComputedStyle(d_div13).visibility != "visible"){
            d_div13.style.visibility = "visible";
        }else{
            d_div13.style.visibility = "hidden";
        }
    });btn_div14.addEventListener("click", () => {
        if(getComputedStyle(d_div14).visibility != "visible"){
            d_div14.style.visibility = "visible";
        }else{
            d_div14.style.visibility = "hidden";
        }
    });btn_div15.addEventListener("click", () => {
        if(getComputedStyle(d_div15).visibility != "visible"){
            d_div15.style.visibility = "visible";
        }else{
            d_div15.style.visibility = "hidden";
        }
    });