import db from '../db.js';

export const getAllEvents = (req, res, next) => {
    try {
        db.all('SELECT * FROM evento ORDER BY fecha DESC', [], (err, rows) => {
            if(err){
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(rows);
        });
    } catch(error){
        next(error);
    }
}

export const getEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        db.get('SELECT * FROM evento WHERE id = ?', [id], (err, row) => {
            if(err){
                res.status(400).json({ "error": err.message });
                return;
            }

            if(row === undefined){
                return res.status(404).json({ "message": "Evento no encontrado" });
            }

            res.json(row);
        });
    } catch(error){
        next(error);
    }
}

export const addEvent = async (req, res, next) => {
    try {
        const { nombre, descripcion, tipo_evento, artista, precio_boleto, boletos_disponibles, fecha, hora_inicio, duracion, nombre_lugar } = req.body;

        db.run('INSERT INTO evento (nombre, descripcion, tipo_evento, artista, precio_boleto, boletos_disponibles, fecha, hora_inicio, duracion, nombre_lugar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            nombre,
            descripcion,
            tipo_evento,
            artista,
            precio_boleto,
            boletos_disponibles,
            fecha,
            hora_inicio,
            duracion,
            nombre_lugar
        ], (err) => {
            if(err){
                res.status(400).json({ "error": err.message });
                return;
            }

            return res.sendStatus(204);
        });
    } catch(error){
        next(error);
    }
}

export const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        db.run('DELETE FROM evento WHERE id = ?', [id], (err) => {
            if(err){
                res.status(400).json({ "error": err.message });
                return;
            }

            return res.sendStatus(204);
        });
    } catch(error){
        next(error);
    }
}

export const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, tipo_evento, artista, precio_boleto, boletos_disponibles, fecha, hora_inicio, duracion, nombre_lugar } = req.body;

        db.run('UPDATE evento SET nombre = ?, descripcion = ?, tipo_evento = ?, artista = ?, precio_boleto = ?, boletos_disponibles = ?, fecha = ?, hora_inicio = ?, duracion = ?, nombre_lugar = ? WHERE id = ?', [
            nombre,
            descripcion,
            tipo_evento,
            artista,
            precio_boleto,
            boletos_disponibles,
            fecha,
            hora_inicio,
            duracion,
            nombre_lugar,
            id
        ], (err) => {
            if(err){
                res.status(400).json({ "error": err.message });
                return;
            }

            return res.sendStatus(204);
        });
    } catch(error){
        next(error);
    }
}