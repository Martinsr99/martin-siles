const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Aplicar middleware
app.use(cors());
app.use(bodyParser.json());

// Datos de ejemplo para los proyectos
const projects = [
  { id: 1, name: 'Project Alpha' },
  { id: 2, name: 'Project Beta' },
  { id: 3, name: 'Project Gamma' }
];

// Endpoint que devuelve la lista de proyectos
app.get('/projects', (req, res) => {
    res.json(projects);
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server running on funning on port 3000');
});
