# Recipe Book Server

A Node.js backend server for managing recipes, built with Express and TypeScript.

## Features

- Fetch all recipes
- Search recipes by ingredient
- Search recipes by category
- Search recipes by area
- Get detailed recipe information by ID

## Prerequisites

Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Navigate to the project directory:

```bash
cd recipe-book-server
```

3. Install dependencies:

```bash
npm install
```

## Running the Application

You can run the application in two modes:

### Development Mode

Runs the server with automatic reload on file changes using nodemon:

```bash
npm run dev
```

### Production Mode

Runs the server in production mode:

```bash
npm start
```

## Project Structure

```
├── src/
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Express middlewares
│   ├── routes/           # API routes
│   ├── schemas/          # Validation schemas
│   ├── services/         # Business logic
│   └── index.ts          # Application entry point
```

## Dependencies

### Main

- **express** - Web framework for Node.js
- **typescript** - Adds static typing to JavaScript
- **axios** - HTTP client for API requests
- **cors** - Enable Cross-Origin Resource Sharing
- **dotenv** - Loads environment variables from `.env`
- **joi** - Data validation library

### Development

- **nodemon** - Automatically restarts server on code changes
- **ts-node** - Runs TypeScript files directly
- **@types/\*** - Type definitions for TypeScript

## API Endpoints

### `GET /recipes`

Fetch all recipes, with optional filters:

- **Query Parameters:**
  - `ingredient` — Filter recipes by ingredient
  - `category` — Filter recipes by category
  - `area` — Filter recipes by area

### `GET /recipes/:id`

Get detailed information about a specific recipe by its ID.

## License

This project is licensed under the terms specified in the LICENSE file included in the repository.
