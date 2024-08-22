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


## 2. Run Postgres and Adminer in a Docker container

```
docker compose up -d
```

You can verify the services running on Docker Dashboard.

<img width="1332" alt="image" src="https://github.com/user-attachments/assets/f9b04ad7-9ed1-4bca-a7a4-c507543b770c">



Open up [https://localhost:8082](https://localhost:8082) to access adminer.

![image](https://github.com/user-attachments/assets/852ffb59-970e-42d0-930e-389c643df65a)




Once you login, you should be able to see empty table and schema.

![image](https://github.com/user-attachments/assets/094c697b-cf64-43de-9bd6-f98fd8dcbdfb)



## Backend Setup

1. Navigate to the backend directory: 

```
cd backend
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the backend directory and add the following environment variables:

```
DB_USER=your_database_user
DB_HOST=your_database_host
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=your_database_port
```

4. Run the database seed script:

```
npm run seed
```

5. Start the backend server:

```
npm start
```


## Frontend Setup

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



