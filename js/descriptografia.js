

var botaoDesCriptografar = document.querySelector("#retorno-palavra");

botaoDesCriptografar.addEventListener("click", descriptografarPalavra);





function descriptografarPalavra(event){
        event.preventDefault();


        var entradaForm = document.querySelector("#form-palavra");

        var palavra = entradaForm.palavra.value;



    console.log("des")
        if (entrada.value!=""){






            var saidaH1 = document.createElement("h1");

            saidaH1.textContent = criptografar2(palavra).join("");



            console.log(criptografar2(palavra));

            var saida = document.querySelector(".div-saida");
            saidaH1.classList.add("h1");

            saida.appendChild(saidaH1);
            var quebra = document.createElement("br");
            saida.appendChild(quebra);



        }

        entrada.value = "";
}





function criptografar2(entrada){

    var sai = Array.from(entrada);

    for (let i = 0; i < sai.length; i++) {

        if (sai[i] == "a"&&sai[i+1]=="i") {
            sai[i] = "a";
            sai[i+1]="";
        }

        if (sai[i] == "e" && sai[i+1]=="n" && sai[i+2]=="t" &&sai[i+3]=="e" && sai[i+4]=="r") {
            sai[i] = "e";
            sai[i+1] ="";
            sai[i+2] ="";
            sai[i+3] ="";
            sai[i+4] ="";
        }
        if (sai[i] == "i" && sai[i+1]=="m" && sai[i+2]=="e" &&sai[i+3]=="s") {

            sai[i] = "i";
            sai[i+1] ="";
            sai[i+2] ="";
            sai[i+3] ="";
        }
        if (sai[i] == "o" && sai[i+1]=="b" && sai[i+2]=="e" &&sai[i+3]=="r") {
            sai[i] = "o";
            sai[i+1] ="";
            sai[i+2] ="";
            sai[i+3] ="";

        }
        if (sai[i] == "u" && sai[i+1]=="f" && sai[i+2]=="a" &&sai[i+3]=="t") {
            sai[i] = "u";
            sai[i+1] ="";
            sai[i+2] ="";
            sai[i+3] ="";

        }


    }

    return sai;

}