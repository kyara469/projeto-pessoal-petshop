const Pet = require("./Pet")
const PetFactory = require("./PetFactory")
const prompt = require("prompt-sync")()

console.log(" =============================")
console.log("  PET SHOP - CADASTRO")
console.log("===============================")

const nome1 = prompt("Digite o nome do primeiro pet: ")
const idade1 = Number(prompt("Digite a idade do primeiro pet: "))
const tipo1 = prompt("Digite o tipo do primeiro pet (cachorro/gato): ") 
const dono1 = prompt("Digite o nome do dono do primeiro pet: ") 
const som1 = prompt("Qual som o primeiro pet faz? ") 
const acao1 = prompt("O que o primeiro pet está fazendo? ")

console.log("")

const nome2 = prompt("Digite o nome do segundo pet: ") 
const idade2 = Number(prompt("Digite a idade do segundo pet: "))
const tipo2 = prompt("Digite o tipo do segundo pet (cachorro/gato): ") 
const dono2 = prompt("Digite o nome do dono do segundo pet: ") 
const som2 = prompt("Qual som o segundo pet faz? ") 
const acao2 = prompt("O que o segundo pet está fazendo? ")

const pet1 = PetFactory.criarPet(
    tipo1,
    nome1,
    idade1,
    dono1
)

const pet2 = PetFactory.criarPet(
    tipo2,
    nome2,
    idade2,
    dono2
)

console.log("\n===============================")
console.log("   PETS CADASTRADOS COM SUCESSO!")
console.log("===============================")

console.log("\nCADASTRO DOS PETS:")

pet1.cadastrar()
pet2.cadastrar()

console.log("\nINFORMAÇÕES:")

pet1.apresentar()
pet2.apresentar()

console.log("\nSONS:")

console.log(`${pet1.nome} faz: ${som1}`)
console.log(`${pet2.nome} faz: ${som2}`)

console.log("\nAÇÕES:")

console.log(`${pet1.nome} está ${acao1}`)
console.log(`${pet2.nome} está ${acao2}`)

console.log("\nQUANTIDADE:")

Pet.mostrarQuantidade()
