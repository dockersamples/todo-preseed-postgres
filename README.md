## A Sample Todo-List App Preseed PostgreSQL Project

![image](https://github.com/user-attachments/assets/5147d31f-532d-4ca8-bc5d-552342bea36b)




This project is a simple todo list application that uses a PostgreSQL database pre-seeded with a todo schema and data. 
The frontend is built using Create React App, and the backend is a Node.js server using Express.

## Pre-requisite

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Getting Started

To get started with this project, follow these steps:

## 1. Clone the repository:

```
git clone https://github.com/ajeetraina/todo-preseed-postgres.git
cd todo-preseed-postgres
```

## 2. Setup environmental variables

Copy `.env.sample` to the `.env` file and make the necessary changes:

```
POSTGRES_USER=postgres
POSTGRES_DB_HOST=localhost
POSTGRES_DB=todo_app
POSTGRES_PASSWORD=<add_your_postgres_password>
POSTGRES_PORT=5432

```

## 2. Bring up Postgres and Adminer containers

```
docker compose up -d
```

You can verify the services running on Docker Dashboard.

<img width="1358" alt="image" src="https://github.com/user-attachments/assets/a5e493a6-b8f8-4998-9dd2-9015b4009dc8">




Open up [https://localhost:8080](https://localhost:8080) to access pgAdmin. 

## Add a New Server

Select "Add New Server" and supply the following credentials:

- Hostname/Address: postgres
- Port: 5432
- Maintenance database: todo_app
- Username: postgres
- Password: <your_postgres_password>

![image](https://github.com/user-attachments/assets/9670290b-0b64-41a0-a912-3a02e21fc0b1)



Once you add a new server, you can find the list of tasks by selecting the right database schema and table.

![image](https://github.com/user-attachments/assets/7b5a900e-7482-4904-a6c5-0f635610f920)


<img width="1065" alt="image" src="https://github.com/user-attachments/assets/db59d00b-d00b-419f-bc1d-cec70b97d498">






## 3. Run the database seed script:

```
npm run seed
```

![image](https://github.com/user-attachments/assets/b3d80af0-e283-45b9-aa66-19ca8b3a8a21)


Note: To automate the seeding process, we have included it as part of your npm scripts. Here’s an example with npm scripts:

```
"scripts": {
  "seed": "node seed.js"
}
```

That's the reason why you were able to execute `npm run seed` to seed the database.


## Running the full-fledged application

1. Start the backend server

Change directory to `backend/`. Run the following command after renaming the `.env.sample` to the `.env` file and modifying the file with the right password.

```
cd backend/
npm install
node server.js
```

### Result:

```
Server is running on port 5000
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


1. Open a new terminal and navigate to the frontend directory:

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


4. Open your browser and visit `http://localhost:3000` to view the to-do list application.

<img width="354" alt="image" src="https://github.com/user-attachments/assets/dceb820c-64f1-4615-813c-3c713505c36d">




## Building from the scratch

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



