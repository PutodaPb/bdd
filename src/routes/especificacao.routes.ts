
import { request, response, Router } from "express";

import { EspecificacaodeRepositorio } from "../modulos/carros/repositorios/Especificações/EspecificacaoRepositorio";

import { CreateServicesEspecificacao } from "../modulos/carros/services/CreateServicesEspecificacao";

import { especificacaoController } from "../modulos/useCase/especifições";
import { listControllerEsp } from "../modulos/useCase/especifições/Alllist";


const especificacaoderota = Router();



especificacaoderota.post("/", (request, response) => {
   
    return especificacaoController.handle(request,response)

});    

especificacaoderota.get("/", (request, response) => {
   
    return listControllerEsp.handle(request,response)

});

export { especificacaoderota};
