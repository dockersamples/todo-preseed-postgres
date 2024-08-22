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
    // Drop the table if it already exists (optional)
    await pool.query(`DROP TABLE IF EXISTS todos;`);

    // Create the table with the correct structure
    await pool.query(`
      CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        task VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT false
      );
    `);

    // Insert seed data
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

// Call the seedData function to run the script
seedData();

