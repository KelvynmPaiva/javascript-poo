import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas){
        return `curso ${nomeCurso} foi criado com ${qtdVagas} vagas.`
    }
}

const novoAdmin = new Admin('Pedro', 'pedro@gmail.com', '1999-08-01')

console.log(novoAdmin);
console.log(novoAdmin.criarCurso('Java', 20));
