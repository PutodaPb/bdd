import { IEspecificacaodeRepositorio } from "../../carros/repositorios/Interface/Repositorios/IEspecificacaoRepositorio";




interface Irequerimento{
    name: string,
    descricao:string
};


class EspecificaoUseCase{
    constructor(private especificacaoRepositorio : IEspecificacaodeRepositorio){};

    execute({name,descricao} :Irequerimento): void {

        const especificacaoExistente = this.especificacaoRepositorio.findByName(name);



        if(especificacaoExistente){
            throw new Error ("Especificações Existente!!!")

        };

        this.especificacaoRepositorio.create({name,descricao});
    };
};

export {EspecificaoUseCase} 