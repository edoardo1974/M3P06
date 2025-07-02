var listaLetras = [];     

function pecaLetra()
{
    // Ottiene il valore dall'input HTML
    const input = document.getElementById('inputLetra');
    const letra = input.value;
    
    input.value = ''; // Pulisce l'input dopo aver preso il valore
    console.log("Letra inserita:", letra);
    return letra;
}

function aggiungiLetra()
{
    let letra = pecaLetra();
    if (verificacaoLetra(letra)) {
        guardarLetras(letra);
        alert("Lettera aggiunta con successo!");
    }
}

function verificacaoLetra(letra)
{
    if (letra.length === 1 && letra.match(/[a-zA-Z]/)) {
        return true;
    } else {
        alert("Por favor, introduza apenas uma letra.");
        return false;
    }
}

function guardarLetras(letra)
{
    listaLetras.push(letra);  // Aggiunge la lettera alla fine dell'array

}

function imprimirLetras()
{
    cancelar();
    let displayText = '';
    for (let i = 0; i < listaLetras.length; i++ ) {
        console.log(listaLetras[i]);
        displayText += listaLetras[i];
    }
    document.getElementById('palavra').textContent = displayText;
    
}

function cancelar()
{
    alert("Operação cancelada.");
}

//aggiungiLetra()

