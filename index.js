const express = require('express');

const app = express();

mongoose.conn

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE
// Tipos de Parametros

//Query Params: request.query (Filtros, ordenação, paginação,...)
//Route Params: request.parmas (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registo)

//MongoDB (Não-Relacional)

app.get('/users', (request, response) => 
{
    console.log(request.body);
    return response.json({message:'Hello World'});
});

app.listen(3333);