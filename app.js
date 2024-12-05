const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// Root Route (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Carambar Joke API!');
});
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const jokesRoutes = require('./routes/jokes');

// Middleware to parse JSON
app.use(express.json());

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar & Co Joke API',
      version: '1.0.0',
      description: 'A simple API to manage jokes for Carambar & Co',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Update with your deployed backend URL when available
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API Routes
app.use('/jokes', jokesRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
