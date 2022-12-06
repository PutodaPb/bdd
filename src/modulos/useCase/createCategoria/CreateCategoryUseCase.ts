/**
 * INFO - EM RESUMO ESSE ARQUIVO ".TS" É UTILIZADO COMO ESTRUTURA DE QUE RECEBE AS INFOS PEDIDAS NO "REF^1"
 * 
 * FUNÇÃO - RECEBIMENTOS DE DADOS VIA "REF^1",AO RECEBER OS DADOS PEDIDOS, ELE PASSA PELA VERIFICAÇÃO DO "FindByName",
              CASO PASSE PELA VERIFICAÇÃO ELE ENVIA OS DADOS RECEBIDOS VIA ( ".POST" / categoria.routes.ts ) PARA A BASE
              DE DADOS, FAZENDO ASSIM O CADASTRO E ARMAZENAMENTO DOS DADOS.

 * OBS - FAZEMOS ESSA CRIAÇÃO PARA QUE A FUNÇÃO DE NIVEL ALTO TENHA SUA FUNCIONALIDADE EXPECIFICADA, SEM DEPENDER DE
         CONSULTAS EXTERNAS PARA FAZER SUA FUNÇÃO.
 */
import { IContratoCategoriaRepositorio } from "../../carros/repositorios/Interface/Categorias/IContratoCategoriaRepositorio";
                // REF^1 ↥↥↥ //

interface Irequerimento {
    name : string;
    descricao : string;
};

class CreateCategoryUseCase {

    constructor(private categoriaRepositorio : IContratoCategoriaRepositorio) {};

    async execute({name,descricao}: Irequerimento) :Promise<void> {  

        // Linha de codigo com funcionalidade de executar a ITF(Irequerimento) sobre os dados informados.

         const categoriaExitente = await this.categoriaRepositorio.findByName(name);
            // Linha em que linkamos uma const a função de outra ("FindByName").

     if (categoriaExitente) {
          throw new Error ("Categoria Existente");

          /* Apos linkagem de Func. aplicamos a função incrementada, caso passe pela verificação 
             sera aplicada a proxima linha de codigo, caso não iremos aplicar uma mensagem de erro
             com o motivo inserido.
          */
    };

      this.categoriaRepositorio.create({name,descricao});
    };
};

export { CreateCategoryUseCase };