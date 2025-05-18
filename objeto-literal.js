const user = {
    nome: 'Juliana',
    email: 'juliana@gmail.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true, 

    exibirInfos: function(){
        // O this no JavaScript é uma referência ao objeto que está executando a função no momento.
        // this = puxa daqui.
        console.log(this.nome, this.email);
    }
}
 
const exibir = function(){
    console.log(this.nome, this.email);
}

const exibirNomeeEmail = exibir.bind(user);
exibirNomeeEmail();