const Pet = require("./Pet")

class Gato extends Pet {

    constructor(nome, idade, dono) {
        super(nome, "Gato", idade, dono)
    }

    emitirSom() {
        console.log(`${this.nome} faz: Miaus miaus!`)
    }

    brincar() {
        console.log(`${this.nome} está comendo um passarinho!`)
    }
}

module.exports = Gato