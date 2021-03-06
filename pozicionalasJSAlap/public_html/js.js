//alert("Helo a script fájlból!");


//alert("Helló Világ!");
console.log("cosolra írunk a sectionben!!");
document.write("Hello Volvo a sectionben");
//document.getElementById("a").value()="halihó";
document.getElementById("a").value = 2;
document.getElementById("b").value = 3;
var valtozoA = document.getElementById("a").value;
var valtozoB = document.getElementById("b").value;

document.write("<p style='color:red'> Első érték:" + valtozoA + "</p>");

document.write("<p>Első változó:" + valtozoA + "</p>");
document.write("<p>Második változó:" + valtozoB + "</p>");
var osszeg = Number(valtozoA) + Number(valtozoB);

document.write("<p>A kétszám összege:" + osszeg + "</p>");

document.write("<p>1,2,3,4,5,6,7,8,9,10</p>");
var szoveg = "";
//var seged = 0;
//for (var i = 1; i < 101; i++) {
//    szoveg += i + ", ";
//    seged++;
//    if (seged === 10)
//    {
//        szoveg += "<br>";
//        seged = 0;
//    }
//}
//
//for (var i = 1; i < 101; i++) {
//    szoveg += i + ", ";
//    if (i % 10 === 0)
//    {
//        szoveg += "<br>";
//    }
//}


kiir();

function kiir() {
    for (var i = 1; i < 101; i++) {
        szoveg += i + ", ";
        if (i % 10 === 0)
        {
            szoveg += "<br>";
        }
    }
}
    document.write("<p>" + szoveg + "</p>");