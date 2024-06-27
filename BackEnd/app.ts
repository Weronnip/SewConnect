import cors from 'cors';
import express from "express"
import { db } from "./models/db.ts";
import bodyParser from "body-parser";
import { ItemProducts } from './models/item.ts';

//main webapp 
const webApp = express();

webApp.use(cors());
webApp.use(bodyParser.json());
webApp.use(bodyParser.urlencoded({ extended: true}));


function MethodGet() {
    return (
        webApp.get('/', (req, res) => {
            res.send('Hello, World');
        }),

        webApp.get('/test', (req, res) => {
            res.send('Hello, home!');
        }),

        webApp.get('/api/items', async (req, res) => {
            const ItemProduct = await db.select().from(ItemProducts);
            res.send(ItemProduct);
        })
    );
}

function StartServer() {
    MethodGet();

    try {
        webApp.listen(3400, () => {
            console.log('Server running by address http://localhost:3400')
        })
    } catch (error) {
        console.error(`Error in ${error}`)
    }
}

StartServer();

