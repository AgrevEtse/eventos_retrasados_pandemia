import db from '../db.js';

export const getEventsPlaces = async (req, res, next) => {
    try {
        const { nombre_lugar } = req.body;

        db.all('SELECT A.*, B.* FROM lugar as A LEFT JOIN evento as B on A.nombre = b.nombre_lugar WHERE A.nombre = ? ORDER BY fecha DESC', [nombre_lugar], (err, rows) => {
            if(err){
                res.status(400).json({ "error": err.message });
                return;
            }

            if(rows.length === 0){
                return res.status(404).json({ "message": "No hay eventos en ese lugar" });
            }

            res.json(rows);
        });
    } catch(error){
        next(error);
    }
}