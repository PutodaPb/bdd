import { json, request, response, Router } from "express";

import multer from "multer";

// Importanto a Biblioteca do express.

import {listController }from "../modulos/useCase/createCategoria/AllList/listController";

import createCategoryController from "../modulos/useCase/createCategoria";
import { importCategoriaController } from "../modulos/useCase/import/importCategoria";

// Importanto a Função Responsavel por Cadastrar as infos inseridas no esqueleto(CategoriaModel) dentro do arrei ({}) de "Categoria Repositorio".

const categoriasderota = Router();

const upload = multer({
    dest: "./tmp",
})

categoriasderota.post("/" ,(request,response) => {
// Rota de post, linkada já a "/categorias".
 
    return createCategoryController().handle(request,response);
});    

categoriasderota.get("/" , (request, response) => {

    return listController.handle(request,response);

});

categoriasderota.post("/import", upload.single("file"), (request, response) => {
    console.log("função on")
    return importCategoriaController.handle(request,response);

});


export { categoriasderota};