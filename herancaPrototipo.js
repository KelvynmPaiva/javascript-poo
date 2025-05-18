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

const admin = {
    nome: 'Mariana',
    email: 'marianajuliana@gmail.com',
    nascimento: '2024-01-05',
    role: 'admin',
    ativo: true, 

    criarCurso: function(){
        console.log('curso criado');
    }
}

// O Object.setPrototypeOf no JavaScript é usado para definir manualmente o protótipo (herança) de um objeto.
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();