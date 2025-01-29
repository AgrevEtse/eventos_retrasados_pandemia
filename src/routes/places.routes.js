import { Router } from 'express';
import { getAllPlaces, getPlace, addPlace, deletePlace, updatePlace } from'../controllers/places.controller.js';

const router = Router();

router.get('/places', getAllPlaces);

router.get('/places/:id', getPlace);

router.post('/places', addPlace);

router.delete('/places/:id', deletePlace);

router.put('/places/:id', updatePlace);

export default router;