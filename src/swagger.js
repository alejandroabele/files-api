const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const { port } = require("./config");
const doc = {
  info: {
    title: 'Files APi',
    description: 'Description',
  },
  host: `localhost${port}`,
  schemes: ['http'],
};

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./routes/files"];
swaggerAutogen(outputFile, endpointsFiles, doc);
