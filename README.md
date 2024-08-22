## A Sample Todo-List App Preseed PostgreSQL Project

<img width="642" alt="image" src="https://github.com/user-attachments/assets/0910ce3e-4973-4e2e-b669-72cc6cb6bd53">


This project is a simple todo list application that uses a PostgreSQL database pre-seeded with a todo schema and data. 
The frontend is built using Create React App, and the backend is a Node.js server using Express.

## Pre-requisite

- Docker Desktop

## Getting Started

To get started with this project, follow these steps:

## 1. Clone the repository:

```
git clone https://github.com/ajeetraina/todo-preseed-postgres.git
cd todo-preseed-postgres
```

## 2. Setup environmental variables

Create `.env.compose` file under the `todo-preseed-postgres` directory  and add the following entries:

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=<your_postgres_password>
POSTGRES_DB=todo_app
```

## 2. Bring up Postgres and Adminer containers

```
docker compose up -d
```

You can verify the services running on Docker Dashboard.

<img width="1332" alt="image" src="https://github.com/user-attachments/assets/f9b04ad7-9ed1-4bca-a7a4-c507543b770c">



Open up [https://localhost:8080](https://localhost:8080) to access adminer.

![image](https://github.com/user-attachments/assets/f472e208-3c3c-4fb6-91d9-643186e4b914)


Once you log in, you should be able to see an empty table and schema.

![image](https://github.com/user-attachments/assets/23a1af8d-348a-4fcb-89e4-32fc910cd4b0)




## Seeding the database

```
root/
│
├── seed.js            # Script for seeding the database
├── .env.compose       # Environment variables for Compose file
├── .env               # Environment variables for seeding
├── compose.yml # Running Postgres and Adminer in a Docker container
│
└── backend/           # Backend directory
    ├── server.js      # Express.js server and API routes
    ├── .env           # Environment variables for backend (specific to server.js)
    └── node_modules/  # Node.js dependencies for backend
```


1. Create a .env file in the root directory and replace the DB password with the right entry:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todo_app
DB_PASSWORD=your_database_password
DB_PORT=5432
```

4. Run the database seed script:

```
npm run seed
```

![image](https://github.com/user-attachments/assets/b3d80af0-e283-45b9-aa66-19ca8b3a8a21)


5. Start the backend server:

```
npm start
```


## Frontend Setup

```
frontend
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
```


1. Navigate to the frontend directory:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Start the frontend server:

```
npm start
```

4. Open your browser and visit `http://localhost:3000` to view the todo list application.


## Project Structure

The project is organized into two primary sections: 
- backend and
- frontend.

## Backend

- `server.js`: The main file for the backend server.
- `db.js`: A file that sets up the PostgreSQL connection pool.
- `seed.js`: A script for seeding data into the database.
- `.env`: A file for storing environment variables, such as database credentials.


## Frontend

- `public`: Contains static assets, such as HTML, CSS, and images.
- `src`: Contains the main source code for the frontend application.
- `App.js`: The main component of the application.
- `index.js`: The entry point for the application.
- `components`: A directory containing reusable components, such as TodoList and TodoItem.
- `services`: A directory containing services for interacting with the backend API.


## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server for both the backend and frontend.
- `npm run seed`: Seeds data into the database.
- `npm test`: Runs tests for both the backend and frontend.


## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.



