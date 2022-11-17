require('dotenv').config()
const express = require('express')
const mysql2 = require('mysql2')
const cors = require('cors');
const app = express()
app.use(express.json())

const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } = process.env
const pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
  res.header("Access-Control-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );

  app.use(cors());
  next();
});


//POST http://localhost:3000/medicos
app.post('/medicos', (req, res) => {
  const { crm, nome } = req.body
  const sql = "INSERT INTO tb_medico (crm, nome) VALUES (?, ?)"
  pool.query(
    sql,
    [crm, nome],
    (err, results, fields) => {
      if(err) {
        console.log("erro=> ", err);
      } else {
        res.status(200).send("ok")
      }
    });
});

//GET http://localhost:3000/medicos
app.get('/medicos', (req, res) => {
  pool.query('SELECT * FROM tb_medico', (err, results, fields) => {
    res.json(results)
  });
});

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))



