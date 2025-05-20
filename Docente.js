import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso de ${curso}, o responsavel é ${this.nome}`
    }
}

const novaDocente = new Docente("Ana", "a@a.com", "2000-05-04")

console.log(novaDocente.aprovarEstudante('Juliana', 'Python'));
