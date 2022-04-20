



function criptografar(entrada){

    var sai = Array.from(entrada);

    for (let i = 0; i < sai.length; i++) {

        if (sai[i]=='a'){
            sai[i]="ai";
        }
        if (sai[i]=='e'){
            sai[i]="enter";
        }
        if (sai[i]=='i'){
            sai[i]="imes";
        }
        if (sai[i]=='o'){
            sai[i]="ober";
        }
        if (sai[i]=='u'){
            sai[i]="ufat";
        }


    }
    return sai;

}