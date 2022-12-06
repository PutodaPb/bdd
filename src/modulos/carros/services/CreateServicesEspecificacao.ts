import { IEspecificacaodeRepositorio } from "../repositorios/Interface/Repositorios/IEspecificacaoRepositorio";

interface Irequerimento{
    name: string;
    descricao: string,
}


class CreateServicesEspecificacao {     

    constructor(private especificacaoRepositorio: IEspecificacaodeRepositorio){}; 

    execute({name,descricao}: Irequerimento): void {
        const repositorioExistente = this.especificacaoRepositorio.findByName(name);
        
        
    if (repositorioExistente){
        throw new Error("Especificação, já existente no baconco de dados!")
        };

    this.especificacaoRepositorio.create({name,descricao});
    };
};


export {CreateServicesEspecificacao};