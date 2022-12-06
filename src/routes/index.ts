import { Router } from "express";
import { categoriasderota } from "./categoria.routes";
import { especificacaoderota } from "./especificacao.routes";

const router = Router()

router.use("/categorias", categoriasderota);
router.use("/especificacao", especificacaoderota);

export { router }