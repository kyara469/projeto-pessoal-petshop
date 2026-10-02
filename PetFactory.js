const Cachorro = require("./Cachorro")
const Gato = require("./Gato")

class PetFactory {

    static criarPet(tipo, nome, idade, dono) {

        if (tipo === "cachorro") {
            return new Cachorro(nome, idade, dono)
        }

        if (tipo === "gato") {
            return new Gato(nome, idade, dono)
        }

        return null
    }
}

module.exports = PetFactory