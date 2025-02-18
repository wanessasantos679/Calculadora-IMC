// Função para calcular o IMC
function calcularIMC() {
    // Captura os valores de peso e altura
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // Verifica se os campos estão preenchidos
    if (peso === "" || altura === "") {
        alert("Por favor, preencha ambos os campos!");
        return;
    }

    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Exibe o resultado do IMC e o feedback baseado no valor
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;

    // Verifica o status do IMC
    let feedback = document.createElement("p");

    if (imc < 18.5) {
        feedback.innerHTML = "Você está abaixo do peso.";
        feedback.style.color = "blue";
    } else if (imc >= 18.5 && imc < 24.9) {
        feedback.innerHTML = "Você está com o peso normal.";
        feedback.style.color = "green";
    } else if (imc >= 25 && imc < 29.9) {
        feedback.innerHTML = "Você está com sobrepeso.";
        feedback.style.color = "orange";
    } else {
        feedback.innerHTML = "Você está com obesidade.";
        feedback.style.color = "red";
    }

    // Adiciona o feedback ao resultado
    resultado.appendChild(feedback);
}
