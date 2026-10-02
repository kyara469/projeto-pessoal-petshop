const Pet = require("./Pet")

class Gato extends Pet {

    constructor(nome, idade, dono) {
        super(nome, "Gato", idade, dono)
    }

    emitirSom() {
        console.log(`${this.nome}`)
    }

    brincar() {
        console.log(`${this.nome}`)
    }
}

module.exports = Gato