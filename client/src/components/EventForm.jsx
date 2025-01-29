import { Grid, Card, Typography, CardContent, TextField, Button, CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EventForm(){
    const [event, setEvent] = useState({
        nombre: '',
        descripcion: '',
        tipo_evento: '',
        artista: '',
        precio_boleto: '',
        boletos_disponibles: '',
        fecha: '',
        hora_inicio: '',
        duracion: '',
        nombre_lugar: ''
    });

    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if(params.id){
            loadEvent(params.id);
        }
    }, [params.id]);

    const loadEvent = async (id) => {
        const res = await fetch('http://localhost:6969/events/' + id);
        const data = await res.json();
        setEvent({ nombre: data.nombre, descripcion: data.descripcion, tipo_evento: data.tipo_evento, artista: data.artista, precio_boleto: data.precio_boleto, boletos_disponibles: data.boletos_disponibles, fecha: data.fecha, hora_inicio: data.hora_inicio, duracion: data.duracion, nombre_lugar: data.nombre_lugar });
        setEditing(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            if(editing){
                await fetch('http://localhost:6969/events/' + params.id, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(event)
                });
            } else{
                await fetch('http://localhost:6969/events', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(event)
                });
            }

            setLoading(false);
            navigate('/events');
        } catch(error){
            console.log(error);
        }
    }

    const handleChange = e => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item xs={3}>
                <Card sx={{mt: 5}} style={{
                    backgroundColor: '#1e272e',
                    padding: '1rem',
                }}>
                    <Typography variant='5' textAlign='center' color='white'>
                        {editing ? 'Editar Evento' : 'Crear Evento'}
                    </Typography>
                    <CardContent>
                        <form onSubmit={ handleSubmit }>
                            <TextField
                                name='nombre'
                                onChange={ handleChange }
                                value={ event.nombre }
                                variant='filled'
                                label='Nombre del evento (*)'
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

                            <TextField
                                name='descripcion'
                                onChange={ handleChange }
                                value={ event.descripcion }
                                variant='filled'
                                label='Descripción del Evento'
                                multiline
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'white'}
                                }}
                            />

                            <TextField
                                name='tipo_evento'
                                onChange={ handleChange }
                                value={ event.tipo_evento }
                                variant='filled'
                                label='Tipo de Evento (*)'
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'red'}
                                }}
                            />

                            <TextField
                                name='artista'
                                onChange={ handleChange }
                                value={ event.artista }
                                variant='filled'
                                label='Artista'
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'white'}
                                }}
                            />

                            <TextField
                                name='precio_boleto'
                                onChange={ handleChange }
                                value={ event.precio_boleto }
                                variant='filled'
                                label='Precio del Boleto (*)'
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'red'}
                                }}
                            />

                            <TextField
                                name='boletos_disponibles'
                                onChange={ handleChange }
                                value={ event.boletos_disponibles }
                                variant='filled'
                                label='Boletos Disponibles (*)'
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'red'}
                                }}
                            />

                            <TextField
                                name='fecha'
                                onChange={ handleChange }
                                value={ event.fecha }
                                variant='filled'
                                label='Fecha (*)'
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'red'}
                                }}
                            />

                            <TextField
                                name='hora_inicio'
                                onChange={ handleChange }
                                value={ event.hora_inicio }
                                variant='filled'
                                label='Hora de Inicio (*)'
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'red'}
                                }}
                            />

                            <TextField
                                name='duracion'
                                onChange={ handleChange }
                                value={ event.duracion }
                                variant='filled'
                                label='Duración'
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'white'}
                                }}
                            />

                            <TextField
                                name='nombre_lugar'
                                onChange={ handleChange }
                                value={ event.nombre_lugar }
                                variant='filled'
                                label='Nombre del Lugar'
                                rows={4}
                                sx={{ display: 'block', margin: '.5rem' }}

                                inputProps={{
                                    style: { color: 'white' }
                                }}
                                InputLabelProps={{
                                    style: { color: 'red' }
                                }}
                            />

                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                disabled={ !event.nombre || !event.tipo_evento || !event.precio_boleto || !event.boletos_disponibles || !event.fecha || !event.hora_inicio || !event.nombre_lugar }
                            >
                                { loading ? <CircularProgress
                                    color='inherit'
                                    size={24}
                                /> : 'Guardar' }
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}