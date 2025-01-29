import { TextField, Button, Typography, Card, CardContent, CircularProgress } from "@mui/material";
import { useState } from 'react';

export default function Join(){
    const [busqueda, setBusqueda] = useState({
        nombre_lugar: ''
    });

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            const res = await fetch('http://localhost:6969/events_places/', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(busqueda)
            });

            const data = await res.json();
            setEvents(data);
            setLoading(false);
        } catch(error){
            console.log(error);
        }

    }

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div
                style={{ marginBottom: '2rem' }}
            >
                <TextField
                    name='nombre_lugar'
                    label='Nombre del lugar'
                    onChange={ handleChange }
                    variant='filled'
                    sx={{
                        display: 'block', margin: '.5rem'
                    }}

                    inputProps={{
                        style: {color: 'white'}
                    }}
                    InputLabelProps={{
                        style: {color: 'red'}
                    }}
                />

                <Button
                    onClick={ handleSubmit }
                    variant='contained'
                    color='primary'
                    type="submit"
                    disabled={!busqueda.nombre_lugar}
                >
                    { loading ? <CircularProgress
                        color='inherit'
                        size={24}
                    /> : 'Buscar' }
                </Button>
            </div>

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
                            <div
                                style={{color: 'white', }}
                            >
                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Nombre</span>: {event.nombre}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Descripción</span>: {event.descripcion}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Tipo Evento</span>: {event.tipo_evento}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Artista</span>: {event.artista}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Precio Boleto</span>: {event.precio_boleto}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Boletos Disponibles</span>: {event.boletos_disponibles}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Fecha</span>: {event.fecha}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Hora Inicio</span>: {event.hora_inicio}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Duración</span>: {event.duracion}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Nombre Lugar</span>: {event.nombre_lugar}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Ciudad</span>: {event.ciudad}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Estado</span>: {event.estado}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Teléfono</span>: {event.telefono}</Typography>

                                <Typography style={{ fontSize: '1.4rem' }}><span style={{fontWeight: 'bold', color: '#1976d2'}}>Domicilio</span>: {event.domicilio}</Typography>

                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}