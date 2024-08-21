const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_app',
  password: 'mysecretpassword',
  port: 5432,
});

const seedData = async () => {
  try {
    await pool.query(`
      INSERT INTO todos (task, completed) VALUES
      ('Buy groceries', false),
      ('Finish blog post', false),
      ('Clean the house', false);
    `);
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database', err);
  } finally {
    pool.end();
  }
};

seedData();

