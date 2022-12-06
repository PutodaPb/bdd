import { EspecificacaodeRepositorio } from "../../carros/repositorios/Especificações/EspecificacaoRepositorio";
import { EspecificacaoController } from "./EspecificacaoController";
import { EspecificaoUseCase } from "./EspecificacaoUseCase";



const especificacaodeRepositorio = EspecificacaodeRepositorio.getInstance();

const especificacaoUseCase = new EspecificaoUseCase(especificacaodeRepositorio);

const especificacaoController = new EspecificacaoController(especificacaoUseCase);

export { especificacaoController };