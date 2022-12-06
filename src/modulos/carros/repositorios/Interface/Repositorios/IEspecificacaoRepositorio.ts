import { EspecificacaoModel } from "../../../entites/Especificacao";




interface ICriacaodeEspecificacaoDTO {
    name: string;
    descricao: string;
}


interface IEspecificacaodeRepositorio{
    create({name, descricao}:ICriacaodeEspecificacaoDTO): void;
    findByName(name:string): EspecificacaoModel;
    list(): EspecificacaoModel[];
}

export {IEspecificacaodeRepositorio,ICriacaodeEspecificacaoDTO};