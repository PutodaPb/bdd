import { EspecificacaodeRepositorio } from "../../../carros/repositorios/Especificações/EspecificacaoRepositorio";
import { ListControllerESP } from "./listControllerESP";
import { ListUseCaseESP } from "./listUseCaseESP";




const especificacaodeRepositorio = EspecificacaodeRepositorio.getInstance();

const listUseCaseEsp = new ListUseCaseESP(especificacaodeRepositorio);

const listControllerEsp = new ListControllerESP(listUseCaseEsp);

export { listControllerEsp };