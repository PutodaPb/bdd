import { EspecificacaoModel } from "../../../carros/entites/Especificacao";
import { IEspecificacaodeRepositorio } from "../../../carros/repositorios/Interface/Repositorios/IEspecificacaoRepositorio";




class ListUseCaseESP {
    constructor(private especificacaoDeRepositorio: IEspecificacaodeRepositorio){}

    execute(): EspecificacaoModel [] {

        const listaDeEspecificao = this.especificacaoDeRepositorio.list();

        return listaDeEspecificao;
    }
}

export { ListUseCaseESP }