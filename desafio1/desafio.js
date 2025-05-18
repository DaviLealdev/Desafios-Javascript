//1. Verificar Palíndromo
//Crie uma função que verifique se uma palavra é um palíndromo (ex: "arara").

function inverterString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(){
    const word = window.prompt("Digíte uma Palavra")
    if (inverterString(word) === word){
        alert(`a palavra ${word} é um palíndromo`)
    }
    else{
        alert("a palavra Não é um palíndromo")
    }
}
window.onload = isPalindrome;