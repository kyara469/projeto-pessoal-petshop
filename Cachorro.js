const Pet = require("./Pet")

class Cachorro extends Pet {

    constructor(nome, idade, dono) {
        super(nome, "Cachorro", idade, dono)
    }

    emitirSom() {
        console.log(`${this.nome} `)
    }

    brincar() {
        console.log(`${this.nome}` )
    }
}

module.exports = Cachorro