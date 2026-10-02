const Pet = require("./Pet")
const PetFactory = require("./PetFactory")

console.log("🐾 =============================")
console.log("       PET SHOP - CADASTRO")
console.log("===============================")


const pet1 = PetFactory.criarPet(
    "cachorro",
    "Teddy",
    3,
    "Larissa"
);

const pet2 = PetFactory.criarPet(
    "gato",
    "Mingau",
    2,
    "Kyara"
)



console.log("CADASTRO DOS PETS:")

pet1.cadastrar()
pet2.cadastrar()



console.log("INFORMAÇÕES:")

pet1.apresentar()
pet2.apresentar()


console.log("SONS:")

pet1.emitirSom()
pet2.emitirSom()



console.log(" AÇÕES:")

pet1.brincar()
pet2.brincar()



console.log(" GETTER:")

console.log(`Idade do ${pet1.nome}: ${pet1.idade} anos`)



console.log(" SETTER:")

pet1.idade = 4;

console.log(`Nova idade do ${pet1.nome}: ${pet1.idade} anos`)



console.log("quantidade:")

Pet.mostrarQuantidade()