class Pet {
    static quantidade = 0

    #idade

    constructor(nome, especie, idade, dono) {
        this.nome = nome
        this.especie = especie
        this.#idade = idade
        this.dono = dono

        Pet.quantidade++
    }

    get idade() {
        return this.#idade
    }

    set idade(novaIdade) {
        if (novaIdade >= 0) {
            this.#idade = novaIdade
        }
    }

    apresentar() {
        console.log(
            `Pet: ${this.nome} | Espécie: ${this.especie} | Idade: ${this.idade} anos | Dono: ${this.dono}`
        )
    }

    cadastrar() {
        console.log(`Pet ${this.nome} cadastrado com sucesso!`)
    }

    static mostrarQuantidade() {
        console.log(`Total de pets cadastrados: ${Pet.quantidade}`)
    }

    emitirSom() {
        console.log(`${this.nome} emitiu um som.`)
    }
}

module.exports = Pet