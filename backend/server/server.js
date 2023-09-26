const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/dbconnection');
const fileUpload =require ('express-fileupload')




class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.api_key = process.env.CLOUDINARY_API_KEY;
        this.usuariosPath = '/api/usuarios';
        this.productPath = '/api/productos';
        
    
      
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    async conectarDB() {
        await dbConnection();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/replit/'
        }));

          }


cors(){
            this.app.use(cors({origin: 'http://localhost:3000'}));
            this.app.use((req,res, next) =>{
                res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
                res.header('Access-Control-Allow-Credencial', 'true');
                res.header(
                    'Access-control-Allow-Header',
                    'origin, X-Requested-with, content-Type, Accept'
                );
                res.header(
                    'Access-Control-Allow-Methods',
                    'GET, POST, PUT, PATH, DELETE'
                );
                next();
            })
        }
    routes(){
        this.app.use(this.productPath, require('../routes/productos'));
       
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
 
 
    }
    

        
        

    listen(){
        this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en puerto ${this.port}`);
    })

    }
}



module.exports = Server;