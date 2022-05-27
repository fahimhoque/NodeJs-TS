import express, {Application, Request, Response} from 'express';

import router from './api/routes/index';
import init from './db/db.init';


const PORT = process.env.PORT || 8080;

export const server = () => {
    const app : Application = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get('/', (req: Request, res: Response) => {
        res.send(`All API Endpoints start with http://localhost:${PORT}/api/v1`);
    });

    app.use('/api/v1', router);

    return app;
}


export const start = () => {
    const app = server();
    try{
        try{
            init();
            console.log("Database Successfully Connected");
        }catch(error){
            console.log(`Error while connecting to DB: ${error}`);
        }
        app.listen(PORT, () => {
            `Server started on port ${PORT}`;
        });
    } catch(error){
        console.log(`Error while starting the server ${error}`);
    }
}

start();