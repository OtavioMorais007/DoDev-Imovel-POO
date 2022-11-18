// Crie as seguintes classes: Imóvel e Pessoa;
// Um Imóvel deve ter os seguintes atributos: endereço, cep, area em metros, quantidade de
// banheiros, quantidade de quartos, as pessoas que moram neste imóvel e o valor do
// mesmo;

// Uma pessoa deve ter os seguintes atributos: nome, cpf e uma data de nascimento;

// Criar três classes filhas que herdam de Imóvel: Casa, Apartamento e Kitnet;

// Uma Casa deve ter um atributo “ComQuintal” que recebe um valor booleano;

// Um Apartamento deve ter os atributos: andar e o valor do condomínio;

// Um Imóvel deve ter dois comportamentos: adicionar uma pessoa como morador e remover
// uma pessoa como morador;

// Uma Kitnet pode ter até dois banheiros, um apartamento pode ter três banheiros e uma
// casa pode ter até cinco banheiros;

// Cada tipo de Imóvel deve ter um método para calcular seu valor com base nas seguintes
// especificações:
// Uma casa com quintal tem um acréscimo de 30% no seu valor;

// Um apartamento deve ter o valor do seu condomínio somado ao valor base;

// Uma Kitnet não tem alterações no seu valor base;

// Crie um construtor para cada classe do exercício anterior;
// Crie pelo menos um objeto de cada classe e teste seus métodos;

class Imovel {
    Endereco
    Cep
    AreaM2
    QuantBanheiros = 0
    QuantQuartos = 0
    QuantResidentes = 0
    Valor

    constructor(endereco, cep, aream2, quantbanheiros, quantquartos, quantresidentes, valor){
        this.Endereco = endereco
        this.Cep = cep
        this.AreaM2 = aream2
        this.QuantBanheiros = quantbanheiros
        this.QuantQuartos = quantquartos
        this.QuantResidentes = quantresidentes
        this.Valor = valor
    }

    AdicionarMorador(quantidade) {
        this.QuantResidentes += quantidade
    }

    RemoverMorador(quantidade) {
        this.QuantResidentes -= quantidade
    }
}

class Pessoa {
    Nome
    Cpf
    DataDeNascimento
}

class Casa extends Imovel {
    ComQuintal // true ou false

    constructor(endereco, cep, aream2, quantbanheiros, quantquartos, quantresidentes, valor, comquintal){
        super(endereco, cep, aream2, quantbanheiros, quantquartos, quantresidentes, valor)
        this.ComQuintal = comquintal
    }

    CalcularValor() {
        if (this.ComQuintal == true) {
            this.Valor = this.Valor * 1.30
        }
    }
}

class Apartamento extends Imovel {
    Andar
    ValorCondominio

    constructor(endereco, cep, aream2, quantbanheiros, quantquartos, quantresidentes, valor, andar, valorcondominio){
        super(endereco, cep, aream2, quantbanheiros, quantquartos, quantresidentes, valor)
        this.Andar = andar
        this.ValorCondominio = valorcondominio
    }

    CalcularValor() {
        this.Valor = this.ValorCondominio + this.Valor
    }
}

class Kitnet extends Imovel {
    constructor(endereco, cep, aream2, quantbanheiros, quantquartos, quantresidentes, valor){
        super(endereco, cep, aream2, quantbanheiros, quantquartos, quantresidentes, valor)
    }
}

let casa = new Casa("Rua Amando de Barros", "18200-000", 120, 2, 3, 0, 150000, true)
let apartamento = new Apartamento("Avenida Pereira", "16450-000", 45, 3, 4, 0, 300000, 4, 500)
let kitnet = new Kitnet("Rua Pedro Alvares", "12500-000", 50, 1, 1, 0, 100000)