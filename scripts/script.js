// JavaScript Document

var klikMenu = document.querySelector("#menu");
var klikZoek = document.querySelector("#zoekbalkje");
var klikClose = document.querySelector("#close");

var menKnop = document.querySelector('#men');
var womenKnop = document.querySelector('#women');
var antwoordTekst = document.querySelector('#antwoord');

klikMenu.addEventListener('click', toonMenu);
klikZoek.addEventListener('click', toonZoeken);
klikClose.addEventListener('click', sluitMenu);

menKnop.addEventListener('click', toonMen);
womenKnop.addEventListener('click', toonWomen);

function toonMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("lijst").classList.toggle("change");
}

function toonZoeken() {
    document.getElementById("zoek").classList.toggle("changes");
}

function sluitMenu() {
    document.getElementById("lijst").classList.remove("change");
}

function toonMen() {
    antwoordTekst.textContent = 'Search MEN';
}

function toonWomen() {
    antwoordTekst.textContent = 'Search WOMEN';
}
