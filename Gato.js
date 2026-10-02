const Pet = require("./Pet")

class Gato extends Pet {

    constructor(nome, idade, dono) {
        super(nome, "Gato", idade, dono)
    }

    emitirSom() {
        console.log(`${this.nome} faz: Miau!`)
    }

    brincar() {
        console.log(`${this.nome} está brincando com a bolinha!`)
    }
}

module.exports = Gato