import express from 'express';
import hdbrs from 'express-handlebars'
import bodyParser from 'body-parser';
import router from './routes/router.js';
import { not_found } from './middleware.js';

import cors from 'cors'


const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/', router)

app.engine('handlebars', hdbrs.engine())
app.set('view engine', 'handlebars')

app.use(not_found)
app.listen(8080, ()=>{
    console.log('Server is running on port 8080')
})
