import db from '../db.js';

export const getAllPlaces = async (req, res, next) => {
    try {
        db.all('SELECT * FROM lugar ORDER BY id DESC', [], (err, rows) => {
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

export const getPlace = async (req, res, next) => {
    try {
        const { id } = req.params;

        db.get('SELECT * FROM lugar WHERE id = ?', [id], (err, row) => {
            if(err){
                res.status(400).json({ "error": err.message });
                return;
            }

            if(row === undefined){
                return res.status(404).json({ "message": "Lugar no encontrado" });
            }

            res.json(row);
        });
    } catch(error){
        next(error);
    }
}

export const addPlace = async (req, res, next) => {
    try {
        const { coordenadas, nombre, ciudad, estado, telefono, capacidad_personas, domicilio } = req.body;

        db.run('INSERT INTO lugar (coordenadas, nombre, ciudad, estado, telefono, capacidad_personas, domicilio) VALUES (?, ?, ?, ?, ?, ?, ?)', [
            coordenadas,
            nombre,
            ciudad,
            estado,
            telefono,
            capacidad_personas,
            domicilio
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

export const deletePlace = async (req, res, next) => {
    try {
        const { id } = req.params;

        db.run('DELETE FROM lugar WHERE id = ?', [id], (err) => {
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

export const updatePlace = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { coordenadas, nombre, ciudad, estado, telefono, capacidad_personas, domicilio } = req.body;

        db.run('UPDATE lugar SET coordenadas = ?, nombre = ?, ciudad = ?, estado = ?, telefono = ?, capacidad_personas = ?, domicilio = ? WHERE id = ?', [
            coordenadas,
            nombre,
            ciudad,
            estado,
            telefono,
            capacidad_personas,
            domicilio,
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