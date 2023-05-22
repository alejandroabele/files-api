# Files backend api

## Backend to consume files from an external api

## About Code

This project is built with Node.js and Express. In this application, we consume CSV files from an external API and transform them into JSON format. The project follows a layered architecture for better organization and separation of concerns.

The project uses the following fundamental dependencies (libraries) for the solution

* [Node.js](https://nodejs.org): Runtime environment
* [Express.js](http://expressjs.com): backend framework
* [Docker Compose](https://docs.docker.com/compose/): Container tool

## Prerequisites

1. Install [Node.js](https://nodejs.org)

### Installing dependencies (libraries) without docker compose

First, enter the base folder of the project directory:

```sh
cd files-api
```

Second, install dependencies

```sh
npm install
```

Run project

```sh
npm run start
```

## Running with docker compose

### Previous requirements

Make sure you have Docker and Docker Compose installed on your system.

### Steps

First, enter the base folder of the project directory:

```sh
cd files-api
```

Second, run app with docker-compose. This command executes docker-compose

```sh
npm run run-api
```

Or you can do it manually with the following command

```sh
docker-compose up --build
```

the default exposed port is 8080, you can change this in the "docker-compose.yml" file

## Configuring development properties

In this sample project, the .env file is included in the repository to make it easy to set up and run locally. However, it is important to note that in production environments it is not recommended to version the .env file together with the source code. This is because the .env file often contains sensitive information such as secret keys, passwords, and other environment-specific configuration data.

In these files you can configure:

* Port (PORT)
* Api External Token (API_EXTERNAL_TOKEN)
* Api External Base URL (API_EXTERNAL_BASE_URL)

## API Documentation

The documentation for all APIs can be accessed by visiting <http://localhost:{PORT}/api-doc>. To generate the documentation, you can execute the following command:

```sh
npm run swagger-gen
```

This will generate the API documentation in the specified format. Please make sure to replace {PORT} with the actual port number used by your application.

## Test

This API utilizes Mocha and Chai for unit testing purposes.

```sh
npm run test
```

## Contact

### You can reach out to me via email or connect with me on social media

* Email: [alejandroabele@hotmai.com.ar](mailto:alejandroabele@hotmai.com.ar)
* LinkedIn: [Alejandro Abele](https://www.linkedin.com/in/alejandro-abele/)
