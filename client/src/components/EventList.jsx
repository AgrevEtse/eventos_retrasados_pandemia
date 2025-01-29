import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function EventList(){
    const [events, setEvents] = useState([]);
    const [places, setPlaces] = useState([]);
    const navigate = useNavigate();

    const loadEvents = async () => {
        const res = await fetch('http://localhost:6969/events');

        const data = await res.json();
        setEvents(data);
    }

    const loadPlaces = async () => {
        const res = await fetch('http://localhost:6969/places');

        const data = await res.json();
        setPlaces(data);
    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:6969/events/${id}`, {
            method: 'DELETE'
        });

        setEvents(events.filter(event => event.id !== id));
    }

    useEffect(() => {
        loadEvents()
    }, []);

    useEffect(() => {
        loadPlaces()
    }, []);

    return (
        <>
            <Typography
                variant='h4'
                style={{ margin: '2rem 0' }}
            >
                Lista de Eventos
            </Typography>
            {
                events.map((event) => (
                    <Card style={{
                        marginBottom: '.7rem',
                        backgroundColor: '#1e272e'
                    }}
                    key={event.id}
                    >
                        <CardContent style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{color: 'white'}}>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Nombre</span>: {event.nombre}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Descripción</span>: {event.descripcion}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Tipo de Evento</span>: {event.tipo_evento}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Artista</span>: {event.artista}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Precio Boleto</span>: {event.precio_boleto}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Boletos Disponibles</span>: {event.boletos_disponibles}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Fecha</span>: {event.fecha}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Hora Inicio</span>: {event.hora_inicio}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Duración</span>: {event.duracion}</Typography>
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Nombre del Lugar</span>: {event.nombre_lugar}</Typography>
                                {
                                    places.map((place) => {
                                        if(event.nombre_lugar === place.nombre){
                                            return (
                                                <Button
                                                    onClick={() => navigate(`/places/${place.id}`)}
                                                    variant="contained"
                                                    color='success'
                                                    style={{ marginTop: '1rem' }}
                                                >
                                                    Mostrar Lugar
                                                </Button>
                                            );
                                        }

                                        return <></>;
                                    })
                                }
                            </div>

                            <div>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    onClick={() => navigate(`/events/${event.id}/edit`)}
                                >
                                    Editar
                                </Button>

                                <Button
                                    variant="contained"
                                    color="warning"
                                    onClick={() => handleDelete(event.id)}
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