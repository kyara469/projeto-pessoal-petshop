const Pet = require("./Pet")

class Cachorro extends Pet {

    constructor(nome, idade, dono) {
        super(nome, "Cachorro", idade, dono)
    }

    emitirSom() {
        console.log(`${this.nome} faz: Haus Haus!`)
    }

    brincar() {
        console.log(`${this.nome} está brincando com a linguiça!`)
    }
}

module.exports = Cachorro