import express from 'express';
import cors from 'cors'
import path from 'path'
import routes from './routes'
//definições de tipos traz todas as informações que ela oferece

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333); 

//Rota: Endereço completo comrequisição
// Recursos: Qual entidade estamos acessando


//Get: Buscar
//Post: Criar uma nova informação
//put: Atualizar uma Informação
//Delete: Remover
/*
const users = [
        'Diego',
        'Reinaldo',
        'Vinicius'
]
*/



/*
app.get('/users',  (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {

    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user)
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
})
*/
