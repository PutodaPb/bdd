import { CategoriaModel } from "../../entites/Categorias";

import { IContratoCategoriaRepositorio ,
        ICriacaoDeCategoriasDTO } from "../Interface/Categorias/IContratoCategoriaRepositorio";

import {getRepository, Repository} from "typeorm"


//              implements = Transformando a calss "CategoriaRepositorio" em um Sub-titulo.

class CategoriaRepositorio implements IContratoCategoriaRepositorio{ //Função Responsavel por Cadastrar as infos inseridas no esqueleto(CategoriaModel) dentro do arrei ({}) de "Categoria Repositorio".
    private repository : Repository<CategoriaModel>;
    
    constructor(){
        this.repository = getRepository(CategoriaModel)
    }

    async create({ name,descricao } : ICriacaoDeCategoriasDTO): Promise<void>{
           // ↥ Desestruturando as const, para poderem ser substituidas.
           // (ICriaçãoDeCategoriasDTO) ↦ Função que pre-define as categorias das const.
        const categoria= this.repository.create({
            descricao,
            name,
        })
        await this.repository.save(categoria)
        
    };
   
    async list(): Promise<CategoriaModel[]> {
        const categoria = await this.repository.find();
        return categoria;
    };
    async findByName(name:string): Promise<CategoriaModel> {
        const categoria = await this.repository.findOne({ name })
        return categoria;
    // Função com objetivo de Consultar a Existencia de um nome ja inserido no banco de dados!
    }
};

export {CategoriaRepositorio};