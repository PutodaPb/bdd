import { Request, Response } from "express";
import {CreateCategoryUseCase} from "../createCategoria/CreateCategoryUseCase"


class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase ){}

    async handle(request: Request, response: Response):Promise<Response>{
        const {name , descricao } = request.body;
    // Comando para requisição das const no body da rota.

     await this.createCategoryUseCase.execute({ name, descricao});
    // Estamos acessando a função "execute", criada dentro da "services de referencia".

       return response.status(201).send();
    };
};


export {CreateCategoryController}