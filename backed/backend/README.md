# Al-Andalus Historical Database API

This is a RESTful API for managing historical data about Al-Andalus, the Muslim-ruled territory in medieval Iberia.

## Features

- Store and retrieve information about historical locations
- Manage records of important battles and conquests
- Track historical persons and their roles
- Document historical events
- Generate comprehensive timelines

## Database Schema

The database contains the following tables:

- `locations`: Historical locations in Al-Andalus
- `persons`: Historical figures and their biographies
- `battles`: Military conflicts
- `conquests`: Territorial acquisitions
- `events`: Significant historical events
- `timeline`: Chronological listing of major events

## API Endpoints

### Locations
- `GET /api/locations` - Get all locations
- `GET /api/locations/:id` - Get location by ID
- `POST /api/locations` - Create a new location
- `PUT /api/locations/:id` - Update a location
- `DELETE /api/locations/:id` - Delete a location
- `GET /api/locations/:id/battles` - Get battles at a location
- `GET /api/locations/:id/events` - Get events at a location

### Persons
- `GET /api/persons` - Get all persons
- `GET /api/persons/:id` - Get person by ID
- `POST /api/persons` - Create a new person
- `PUT /api/persons/:id` - Update a person
- `DELETE /api/persons/:id` - Delete a person
- `GET /api/persons/search` - Search persons

### Battles
- `GET /api/battles` - Get all battles
- `GET /api/battles/with-locations` - Get all battles with location details
- `GET /api/battles/:id` - Get battle by ID
- `POST /api/battles` - Create a new battle
- `PUT /api/battles/:id` - Update a battle
- `DELETE /api/battles/:id` - Delete a battle
- `GET /api/battles/:id/persons` - Get persons involved in a battle
- `POST /api/battles/:id/persons` - Add a person to a battle
- `DELETE /api/battles/:battleId/persons/:personId` - Remove a person from a battle

### Events
- `GET /api/events` - Get all events
- `GET /api/events/with-locations` - Get all events with location details
- `GET /api/events/:id` - Get event by ID
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event
- `GET /api/events/:id/persons` - Get persons involved in an event
- `POST /api/events/:id/persons` - Add a person to an event
- `DELETE /api/events/:eventId/persons/:personId` - Remove a person from an event

### Conquests
- `GET /api/conquests` - Get all conquests
- `GET /api/conquests/with-locations` - Get all conquests with location details
- `GET /api/conquests/:id` - Get conquest by ID
- `POST /api/conquests` - Create a new conquest
- `PUT /api/conquests/:id` - Update a conquest
- `DELETE /api/conquests/:id` - Delete a conquest
- `GET /api/conquests/:id/persons` - Get persons involved in a conquest
- `POST /api/conquests/:id/persons` - Add a person to a conquest
- `DELETE /api/conquests/:conquestId/persons/:personId` - Remove a person from a conquest

### Timeline
- `GET /api/timeline` - Get all timeline entries
- `GET /api/timeline/:id` - Get timeline entry by ID
- `POST /api/timeline` - Create a new timeline entry
- `PUT /api/timeline/:id` - Update a timeline entry
- `DELETE /api/timeline/:id` - Delete a timeline entry
- `GET /api/timeline/comprehensive/all` - Get comprehensive timeline

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MySQL database:
   - Ensure MySQL is installed and running
   - Update the database configuration in `backend/config/db.js` with your MySQL credentials

4. Initialize the database:
   ```
   npm run init-db
   ```

5. Start the server:
   ```
   npm start
   ```

6. The API will be available at http://localhost:3000

## Development

To run the server in development mode with automatic reloading:
```
npm run dev
``` 