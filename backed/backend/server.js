const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/db');
const initializeDatabase = require('./config/initDatabase');

// Import routes
const locationRoutes = require('./routes/locationRoutes');
const personRoutes = require('./routes/personRoutes');
const battleRoutes = require('./routes/battleRoutes');
const eventRoutes = require('./routes/eventRoutes');
const conquestRoutes = require('./routes/conquestRoutes');
const timelineRoutes = require('./routes/timelineRoutes');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', '*'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/locations', locationRoutes);
app.use('/api/persons', personRoutes);
app.use('/api/battles', battleRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/conquests', conquestRoutes);
app.use('/api/timeline', timelineRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Al-Andalus Historical Database API',
    endpoints: {
      locations: '/api/locations',
      persons: '/api/persons',
      battles: '/api/battles',
      events: '/api/events',
      conquests: '/api/conquests',
      timeline: '/api/timeline'
    }
  });
});

// Start server function
async function startServer() {
  try {
    // Test database connection
    const dbConnected = await testConnection();
    
    if (!dbConnected) {
      console.log('Attempting to initialize database...');
      const initialized = await initializeDatabase();
      
      if (!initialized) {
        console.error('Database initialization failed. Please check your database configuration.');
        process.exit(1);
      }
      
      console.log('Database initialized successfully.');
    }
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`API Documentation: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
}

// Start the server
startServer(); 