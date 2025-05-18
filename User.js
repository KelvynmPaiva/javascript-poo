export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
       this.nome = nome
       this.email = email
       this.nascimento = nascimento
       this.role = role || "estudante"
       this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Kelvyn', 'kelvyn@gmail.com', '2025-08-01')

console.log(novoUser);
console.log(novoUser.exibirInfos());
