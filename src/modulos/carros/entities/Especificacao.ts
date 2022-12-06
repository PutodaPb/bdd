import{v4 as uuidv4} from "uuid";



class EspecificacaoModel {
    // Class com a Criação do Modelo para ser subistituido pelas infos requisitadas. 

   id?: string;
   name: string;
   descricao: string;
   created_at: Date;

   constructor(){
   // Função para criar ID direto no modelo sem depender da rota ou ele se linkar direto a rota de categoria.

       if(!this.id) {
           this.id = uuidv4();
       }
   }
} 


export {EspecificacaoModel}