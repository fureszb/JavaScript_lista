window.addEventListener("load", init)

function init() {
    const tartalomElem = document.getElementById("tartalom")
    console.log(tartalomElem);
    const tartalomElemMaskepp = document.querySelector("#tartalom")
    const tartalomElemMaskepp2 = document.querySelector(".tart")

    
    const tartalomElem3 = document.getElementsByClassName("tart")
    const tartalomElemEz = document.querySelectorAll(".tart")
    console.log(tartalomElemEz);

    let lista = ["gyros", "pizza", "Lazagne", "Csirkemell"]
    let kepek = ["080528(2).jpg", "ga050625hun(2).gif", "ga050625hun(1).gif"]
    listaKiir(lista, tartalomElemEz);
    kepKiir(kepek);

}
function listaKiir(lista, tartalomElemEz) {
    let szoveg = "<h1>Kedvenc eteleim:</h1>";
    szoveg += "<ul>"
    for (let index = 0; index < lista.length; index++) {

        szoveg += "<li>" + lista[index] + "</li>"

    }
    szoveg += "</ul>"
    tartalomElemEz[0].innerHTML = szoveg

}
function kepKiir(lista) {
    const tartalomElemEz = document.querySelectorAll(".article")
    szoveg ="";
    for (let index = 0; index < lista.length; index++) {
        szoveg+='<div><img src="'+lista[index]+' alt="">';
        szoveg+="</div>";
        
    }
    tartalomElemEz[0].innerHTML = szoveg;
    
    
}