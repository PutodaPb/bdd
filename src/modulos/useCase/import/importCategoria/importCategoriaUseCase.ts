import { parse} from "csv-parse";
import fs from "fs";
import { IContratoCategoriaRepositorio } from "../../../carros/repositorios/Interface/Categorias/IContratoCategoriaRepositorio";

interface IimportCategoria{
    name: string;
    descricao: string;
}

class ImportCategoriaUseCase {
    constructor(private importcategoriaRepositorio : IContratoCategoriaRepositorio){}

    
    
    loadCategoria(file: Express.Multer.File):Promise<IimportCategoria[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categorias: IimportCategoria[] = [];
        
            
            const parseFile = parse();
    
            stream.pipe(parseFile);
            
            parseFile
                .on("data", async (line) => {
                    const [name, descricao] = line;

                    categorias.push({name,
                        descricao,
                    
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path)
                    resolve(categorias);
                    
                })
                .on("error", (err) => {
                    reject(err);
                })
        }); 
    };


    async execute(file: Express.Multer.File):Promise<void>{
        const categorias = await this.loadCategoria(file);
        
        
        categorias.map(categoria => {
            const {name, descricao} = categoria;

            const existCategoria = this.importcategoriaRepositorio.findByName(name);

            if(!existCategoria) {
                this.importcategoriaRepositorio.create({
                    name,
                    descricao,
                });
            }
        });
    }
};


export { ImportCategoriaUseCase };