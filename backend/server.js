const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_app',
  password: 'mysecretpassword',
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Routes will go here

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

app.get('/todos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/todos', async (req, res) => {
  try {
    const { task } = req.body;
    const result = await pool.query(
      'INSERT INTO todos (task) VALUES ($1) RETURNING *',
      [task]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    await pool.query('UPDATE todos SET completed = $1 WHERE id = $2', [completed, id]);
    res.json('Todo updated');
  } catch (err) {
    console.error(err.message);
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    res.json('Todo deleted');
  } catch (err) {
    console.error(err.message);
  }
});

