const Pet = require("./Pet")

class Cachorro extends Pet {

    constructor(nome, idade, dono) {
        super(nome, "Cachorro", idade, dono)
    }

    emitirSom() {
        console.log(`${this.nome} faz: Au au!`)
    }

    brincar() {
        console.log(`${this.nome} está brincando com a bolinha!`)
    }
}

module.exports = Cachorro