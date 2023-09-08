const express = require('express');
const mysql = require('mysql');
const { faker } = require('@faker-js/faker');

const app = express();

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

app.listen(3000, () => {
  console.log('Servidor está ouvindo na porta 3000');
});

app.get('/', async (req, res) => {

  await inserirNomeAleatorio();
    
  const nomes = await listarNomes();
  
  let html = '<h1>Full Cycle Rocks!</h1> <h2>Lista de nomes no banco de dados</h2>';
  html += '<ol>';
  nomes.forEach((nome) => {
    html += `<li>${nome}</li>`;
  });
  html += '</ol>';
  
  res.send(html);

  // connection.end()
});

function inserirNomeAleatorio() {
  const nomeAleatorio = faker.person.firstName();
  console.log(`Nome aleatório '${nomeAleatorio}' gerado.`);
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO people (nome) VALUES ('${nomeAleatorio}')`;

    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Erro ao inserir nome no banco de dados:', error);
        reject(error);
        return;
      }

      console.log(`Nome aleatório '${nomeAleatorio}' inserido no banco de dados.`);
      resolve();
    });
  });
}

function listarNomes() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT nome FROM people';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        reject(error);
        return;
      }

      const nomes = results.map((result) => result.nome);
      resolve(nomes);
    });
  });
}