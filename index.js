var numeroSecreto = parseInt(Math.random() * 11);
var resultado = document.getElementById("result");
var NumerodeTentativas = 5


function chutar() {
    
    var chute = parseInt(document.getElementById("chute").value);
    console.log(numeroSecreto);
    
    
    if (chute == numeroSecreto) {

        resultado.innerHTML = "Você entrou na minha mente!";
        
        
    } else if (chute > 10 || chute < 0) {

        resultado.innerHTML = "O número não é menor que 10!";

    } else if (numeroSecreto > chute) {
        
        resultado.innerHTML = "O número que estou pensando é maior!"
        
    } else if (numeroSecreto < chute) {
        
        resultado.innerHTML = "O número que estou pensando é menor!"
        
    } else {

        resultado.innerHTML = "O número não é esse...";

    }

    NumerodeTentativas--

    if (NumerodeTentativas==0) {
        NumerodeTentativas = 5 //volta para 5 tentativas
        alert("Acabaram suas tentativas!") //um alerta para indicar o fim das tentativas
        window.location.reload() //essa é uma forma de reiniciar a página
    }
    
    
}

function reiniciar() {

    window.location.reload()
    
}
    

    

    // for (let e = 0; e < Limitador; e++) {
        
    //     if (contador == Limitador){
    //         numeroSecreto = parseInt(Math.random() * 11);
    //         contador = -1
    //     } 

    //     contador++
    // }