import { EspecificacaoModel } from "../../entites/Especificacao";
import { CategoriaRepositorio } from "../Categorias/CategoriaRepositorio";
import { 
    IEspecificacaodeRepositorio,
    ICriacaodeEspecificacaoDTO }
     from "../Interface/Repositorios/IEspecificacaoRepositorio";
// LINHAS DE IMPORTAÇÕES.




class EspecificacaodeRepositorio implements IEspecificacaodeRepositorio{
    // CLASSE DE CRIAÇÃO DO ARREI ("[]") DE ESPECIFICAÇÃO.

    private especificacoes : EspecificacaoModel[];
        // DECLARANDO PRIVACIDADE DE ACESSO SOBRE A CONST.

    private static INSTANCE : EspecificacaodeRepositorio

    private constructor() {
        this.especificacoes = [];
            // INICIANDO A FUNÇÃO DA "Especificação []".
    };

    public static getInstance(): EspecificacaodeRepositorio{

        if(!EspecificacaodeRepositorio.INSTANCE){
            EspecificacaodeRepositorio.INSTANCE = new EspecificacaodeRepositorio;
        }
    return EspecificacaodeRepositorio.INSTANCE;
    }
    
    
    create({ name, descricao }: ICriacaodeEspecificacaoDTO){
        // CRIANDO OS DADOS DENTRO DO "DTO", PARA CONFIRMAMOS SE ESTA NO FORMATO REQUISITADO.
        
        const especificacaoModel = new EspecificacaoModel();// <- REF^1
        // LINKANDO AS FUNC. DO REF^1 A CONST CRIADA.
        
        Object.assign(especificacaoModel, {
            // INSERINDO OS DADOS ABAIXO DENTRO DO NOSSO ARREI ("[]").
            
            name,
            descricao,
            created_at: new Date(),
        });  
        
        this.especificacoes.push(especificacaoModel);
        // puxando e inserindo as infos do ("especificação"), dentro do arrei ("especificações").
        
    };

    list(): EspecificacaoModel[] {
        return this.especificacoes;
    }

    findByName(name: string): EspecificacaoModel {
        const especificacaoModel = this.especificacoes.find((especificacaoModel)=> especificacaoModel.name === name);
        return especificacaoModel;
        }
};

export {EspecificacaodeRepositorio}