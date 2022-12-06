import { CategoriaRepositorio } from "../../carros/repositorios/Categorias/CategoriaRepositorio";
import { CreateCategoryController} from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


console.log("arquivo index.")
export default (): CreateCategoryController =>{

    const categoriaRepositorio = new CategoriaRepositorio();
    
    const createCategoryUseCase = new CreateCategoryUseCase(categoriaRepositorio);
    
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);
    
return createCategoryController;
};
