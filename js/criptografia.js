
var botaoCriptografar = document.querySelector("#pegar-palavra");

botaoCriptografar.addEventListener("click", criptografarfarPalavra);

function criptografarfarPalavra(event){
    event.preventDefault();


    var entradaForm = document.querySelector("#form-palavra");

    var palavra = entradaForm.palavra.value;
    if (entrada.value!=="") {
        var saidaH1 = document.createElement("h1");

        saidaH1.textContent = criptografar1(palavra).join("");


        console.log("fff")

        var saida = document.querySelector(".div-saida");


        saidaH1.classList.add("h1");

        saida.appendChild(saidaH1);
        var quebra = document.createElement("br");

        saida.appendChild(quebra);

        const myTimeout = setTimeout(myGreeting, 500);


        function myGreeting(){
            saida.style.background= "#121212ff";
        }



    }
    entrada.value = "";

}




function criptografar1(entrada){

    var sai = Array.from(entrada);

    for (let i = 0; i < sai.length; i++) {

        if (sai[i] === "a") {
            sai[i] = "ai";
        }
        if (sai[i] === "e") {
            sai[i] = "enter";
        }
        if (sai[i] === "i") {
            sai[i] = "imes";
        }
        if (sai[i] === "o") {
            sai[i] = "ober";
        }
        if (sai[i] === "u") {
            sai[i] = "ufat";
        }
    }


return sai;

}