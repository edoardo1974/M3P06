var listaLetras = [];     
var verifiqueoperação = false; 

function pecaLetra()
{
    // Ask the input value with id 'inputLetra' 
    // and return the value entered by the user.
    const input = document.getElementById('inputLetra');
    const letra = input.value;

    input.value = ''; //
    console.log("Letra inserida:", letra);
    return letra;
}

function operaçãoJáConcluída() {
    if (verifiqueoperação) {
        alert("Operação já concluída.");
        return true;
    }
    return false;
}


function adicionarLetra(){
    if (operaçãoJáConcluída()) {// Check if the operation is already completed
        return;
    }
    else {   
        let letra = pecaLetra();
        if (verificacaoLetra(letra)) {
            guardarLetras(letra);
        }
        }
}

/*function adicionarLetra()// Function to add a letter
{
    if (verifiqueoperação) {// Check if the operation is already completed
        alert("Operaçao já concluída.");
        return;
    }
    else {   
        let letra = pecaLetra();
        if (verificacaoLetra(letra)) {
            guardarLetras(letra);
        }
        }
}
        */

function verificacaoLetra(letra)// Function to verify if the input is a letter
{
    if (letra.length === 1 && letra.match(/[a-zA-Z]/)) {
        return true;
    } else {
        alert("Por favor, introduza apenas uma letra.");
        return false;
    }
}

function guardarLetras(letra)// Function to store the letter
{
    listaLetras.push(letra);  
}

function imprimirLetras()// Function to print the letters
{
    if (operaçãoJáConcluída()) {
        return;
    } 
    else {
        cancelar();
        let displayText = '';
        for (let i = 0; i < listaLetras.length; i++ ) {
            console.log(listaLetras[i]);
            displayText += listaLetras[i];
        }
        document.getElementById('palavra').textContent = 'A palavra inserita è: '+ displayText;
}
}

function cancelar()// Function to cancel the operation
{
    alert("Operação cancelada.");
    verifiqueoperação = true; 
}



