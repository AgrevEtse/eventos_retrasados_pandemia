import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PlaceList(){
    const [places, setPlaces] = useState([]);
    const navigate = useNavigate();

    const loadPlaces = async () => {
        const res = await fetch('http://localhost:6969/places');

        const data = await res.json();
        setPlaces(data);
    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:6969/places/${id}`, {
            method: 'DELETE'
        });

        setPlaces(places.filter(place => place.id !== id));
    }

    useEffect(() => {
        loadPlaces()
    }, []);

    return (
        <>
            <Typography
                variant='h4'
                style={{ margin: '2rem 0' }}
            >
                Lista de Lugares
            </Typography>
            {
                places.map((place) => (
                    <Card style={{
                        marginBottom: '.7rem',
                        backgroundColor: '#1e272e'
                    }}
                    key={place.id}
                    >
                        <CardContent style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div
                                style={{color: 'white', }}
                            >
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Coordenadas</span>: {place.coordenadas}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Nombre</span>: {place.nombre}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Ciudad</span>: {place.ciudad}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Estado</span>: {place.estado}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Teléfono</span>: {place.telefono}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Capacidad de personas</span>: {place.capacidad_personas}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Domicilio</span>: {place.domicilio}</Typography>
                            </div>

                            <div>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    onClick={() => navigate(`/places/${place.id}/edit`)}
                                >
                                    Editar
                                </Button>

                                <Button
                                    variant="contained"
                                    color="warning"
                                    onClick={() => handleDelete(place.id)}
                                    style={{marginLeft: '.5rem'}}
                                >
                                    Eliminar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    );
}