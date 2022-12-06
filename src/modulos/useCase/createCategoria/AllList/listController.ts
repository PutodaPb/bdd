import { Request, Response, } from "express";
import { ListUseCase } from "../AllList/listsUseCase"




class ListController {
    constructor(private listUseCase: ListUseCase) {}

    handle(request: Request, response: Response): Response{
        const allList = this.listUseCase.execute();

        return response.json(allList);
    }

}



export {ListController}