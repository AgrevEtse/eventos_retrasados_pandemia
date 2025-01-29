import { Router } from 'express';
import { getAllEvents, getEvent, addEvent, deleteEvent, updateEvent } from '../controllers/events.controller.js';

const router = Router();

router.get('/events', getAllEvents);

router.get('/events/:id', getEvent);

router.post('/events', addEvent);

router.delete('/events/:id', deleteEvent);

router.put('/events/:id', updateEvent);

export default router;