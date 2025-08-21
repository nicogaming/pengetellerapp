function calculate(){
    var tyvre = document.getElementById("20re").value;
    var tire = document.getElementById("10re").value;
    var femer = document.getElementById("5re").value;
    var tore = document.getElementById("2re").value;
    var enre = document.getElementById("1re").value;

    console.log(tyvre)
    var udregnet20re = 25 * +tyvre;
    var udregnet10re = 25 * +tire;
    var udregnet5re = 25 * +femer;
    var udregnet2re = 20 * +tore;
    var udregnet1re = 20 * +enre;

    var tyvreptag = document.getElementById("tyvrende");
    var tireptag = document.getElementById("tire");
    var femmerptag = document.getElementById("femmer");
    var toreptag = document.getElementById("tore");
    var enreptag = document.getElementById("ener");
    tyvreptag.innerHTML = udregnet20re;
    tireptag.innerHTML = udregnet10re;
    femmerptag.innerHTML = udregnet5re;
    toreptag.innerHTML = udregnet2re;
    enreptag.innerHTML = udregnet1re;
}