import { CategoriaRepositorio } from "../../../carros/repositorios/Categorias/CategoriaRepositorio";

import { ListController } from "./listController";
import { ListUseCase } from "./listsUseCase";


const categoriaRepositorio = null;

const listUseCase = new ListUseCase(categoriaRepositorio);

const listController = new ListController(listUseCase);

export { listController }