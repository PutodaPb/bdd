import { Request, Response } from "express";
import { ListUseCaseESP } from "../Alllist/listUseCaseESP"




class ListControllerESP {

    constructor(private listUseCaseESP : ListUseCaseESP){}

    handle(request: Request, response: Response): Response{

        const allListESP = this.listUseCaseESP.execute();

        return response.json(allListESP)

    }

}


export { ListControllerESP }