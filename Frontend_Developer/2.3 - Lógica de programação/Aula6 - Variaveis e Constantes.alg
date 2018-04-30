algoritmo "semnome"
// Função :
// Autor :
// Data : 17/03/2018
// Seção de Declarações 
var

   nome: caractere // Declarando variáveis
   idade: inteiro
   altura: real
   peso: real
   imc: real

inicio

   pi <- 3.14 // Declarando constantes
   Escreval("Qual é o seu nome?")
   leia(nome)
   Escreval("Qual sua idade?")
   leia(idade)
   Escreval("Qual sua altura?")
   leia(altura)
   Escreval("Qual seu peso?")
   leia(peso)
   imc:= peso / (altura * altura);
   Escreval("Seja bem-vindo ", nome)
   Escreval("Seu IMC é: ",imc)
      
fimalgoritmo
