import { Request, Response } from "express";
import { EspecificaoUseCase } from "./EspecificacaoUseCase";



class EspecificacaoController {

    constructor(private especificacaoUseCase : EspecificaoUseCase){}


    handle(request: Request, response: Response):Response{
        const {name,descricao} = request.body;

        this.especificacaoUseCase.execute({name,descricao})

        return response.status(201).send();
    };
};



export { EspecificacaoController }