import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import eventsRoutes from './routes/events.routes.js';
import placesRoutes from './routes/places.routes.js';
import eventsPlacesRoutes from './routes/events_places.routes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(eventsRoutes);
app.use(placesRoutes);
app.use(eventsPlacesRoutes);

app.get('/', (req, res) => {
    res.send('<h2>API Eventos Retrasados por la Pandemia</h2>');
});

app.use((err, req, res, next) => {
    return res.json({ "message": err.message });
});

const port = 6969;
app.listen(port);
console.log('Server on port', port);