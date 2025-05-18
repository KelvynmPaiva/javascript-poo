function User (nome, email){
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`;
    }
}

// new é usada para criar instâncias de objetos com base em funções construtoras ou classes.
const novoUser = new User('Kelvyn', 'kk@gmail.com')
console.log(novoUser.exibirInfos());

