/*seged fgv*/
function ID(nev) {
    //document.getElementById
    return document.getElementById(nev);
}
function CLASS(nev) {
    return document.getElementsByClassName(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
var osszeg = 0;

function beker() {
    var szamolGomb = ID("szamol");
    var valtA = Number(document.getElementById("a").value);//bekérjük az adatokat; ()-be
    var valtB = Number(document.getElementById("b").value);
    osszeg = valtA + valtB;
    console.log("beker_lefut");
    if (isNaN(osszeg) || document.getElementById("a").value === "" || document.getElementById("b").value === "") {
        //gomb betuszine legyen halvany es a titel tagbe írjunk ki szoveget
        ID("szamol").style.color = "lightgray";
        ID("szamol").title = "Számokat adj meg!";

    } else {
        ID("szamol").style.color = "black";
        szamolGomb.addEventListener("click", szamol, false);
        ID("szamol").title = "Kattints!";
    }
    ID("a").addEventListener("input", beker, false);
    ID("b").addEventListener("input", beker, false);
}
function szamol() {

    ID("szoveg").innerHTML = "Eredmény:<span style='color:red;'>" + osszeg + "</span>";
    ID("uzenet").innerHTML = "HELLO Világ! Gratuálunk a helyes kitöltéshez!";
}
function szamolFormaz() {
    ID("szamol").style.color = "red";
    ID("szamol").style.border = "1px solid blue";
}
function szamolFormazLevesz() {
//    document.getElementById("szamol").style.color = "initial";
    ID("szamol").style.color = "initial";
    
}
function inputFormazas() {
    this.classList.add("bevitelimezo");
}
function inputFormazasLe() {
    this.classList.remove("bevitelimezo");
}
function init() {
    console.log("init lefut");

    beker();
    
//    szamolGomb.addEventListener("click", szamol, false);
//    szamolGomb.addEventListener("mouseover", szamolFormaz, false);
//    szamolGomb.addEventListener("mouseout", szamolFormazLevesz, false);
    ID("a").addEventListener("focusin", inputFormazas, false);
    ID("a").addEventListener("focusout", inputFormazasLe, false);
    ID("b").addEventListener("focusin", inputFormazas, false);
    ID("b").addEventListener("focusout", inputFormazasLe, false);
    
}
window.addEventListener("load", init, false);

