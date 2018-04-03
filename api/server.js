import path from 'path';
import express from 'express';
import SwaggerExpress from 'swagger-express-mw';
import swaggerui from 'swagger-tools/middleware/swagger-ui';

const NODE_PORT = process.env.NODE_PORT || 5000;
const SWAGGER_UI = path.join(__dirname, 'swagger/swagger-ui');
const appRoot = path.join(__dirname, '..');
const app = express();
const config = { appRoot };

SwaggerExpress.create(config, function(err, swaggerExpress) {
    if (err) { throw err; }

    app.use(swaggerui(swaggerExpress.runner.swagger, {
        apiDocs: '/api-docs',
        swaggerUi: '/',
        swaggerUiDir: SWAGGER_UI
    }));

    swaggerExpress.register(app);
    app.listen(NODE_PORT);
});
