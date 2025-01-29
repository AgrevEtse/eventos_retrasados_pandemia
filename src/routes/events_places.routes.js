import { Router } from 'express';
import { getEventsPlaces } from '../controllers/events_places.controller.js';

const router = Router();

router.put('/events_places', getEventsPlaces);
router.get('/events_places', (req, res) => {
    res.send('<h2>Usa el método PUT para dar el nombre del lugar</h2>');
});

export default router;