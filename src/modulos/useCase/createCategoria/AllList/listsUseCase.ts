import { CategoriaModel } from "../../../carros/entites/Categorias";
import { IContratoCategoriaRepositorio } from "../../../carros/repositorios/Interface/Categorias/IContratoCategoriaRepositorio";





class ListUseCase {
    constructor(private categoriaRepositorio: IContratoCategoriaRepositorio) {}
    
    execute(): CategoriaModel [] {
        console.log(this.categoriaRepositorio.list)
        const listaDeCategoria = this.categoriaRepositorio.list();
    
        return listaDeCategoria;
        }
    }


export { ListUseCase }