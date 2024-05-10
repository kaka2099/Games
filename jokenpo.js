function Jokenpo() { //Criar uma função

    const esco = document.getElementById('escolha'); //Puxar o input de pergunta para o JS
    const button = document.getElementById('butt'); //Puxar o input de botão para o JS

    button.addEventListener("click", function() { //Dar um evento ao butão
         let numero = esco.value;

         let escolhaComputador = Math.floor(Math.random() * 3) + 1 //Computador escolher entre 1 e 3

         if (numero > 3 || numero <1 ) { //Possibilidade de qualquer número diferente de 1,2 e 3
            document.getElementById('pc').textContent = "Por favor escolha uma opção entre 1 e 3 "
         } 

         else if (numero == 1 && escolhaComputador == 2) { //Possibilidades de derrota
            document.getElementById('pc').textContent = "Você perdeu, o computador escolheu Papel"
         } else if (numero == 2 && escolhaComputador == 3) {
            document.getElementById('pc').textContent = "Você perdeu, o computador escolheu Tesoura"
         } else if (numero ==  3 && escolhaComputador == 1) {
            document.getElementById('pc').textContent = "Você perdeu, o computador escolheu Pedra"
         }
else if (numero == escolhaComputador) {
            document.getElementById('pc').textContent = "Empate, ambos escolheram a opção " + escolhaComputador
         } 

         else if (numero == 1 && escolhaComputador == 3) { //Possibilidades de vitoria
            document.getElementById('pc').textContent = "Você venceu, o computador escolheu Tesoura"
         } else if (numero == 2 && escolhaComputador == 1) {
            document.getElementById('pc').textContent = "Você venceu, o computador escolheu Pedra"
         } else if (numero ==  3 && escolhaComputador == 2) {
            document.getElementById('pc').textContent = "Você venceu, o computador escolheu Papel"
         }

         else { //Caso coloque uma letra
            document.getElementById('pc').textContent = "Por favor escolha uma opção entre 1 e 3" 
         }





    })


}

Jokenpo(); //Puxar tudo