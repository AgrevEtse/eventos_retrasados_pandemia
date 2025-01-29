import { Grid, Card, Typography, CardContent, TextField, Button, CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EventForm(){
    const [place, setPlace] = useState({
        coordenadas: '',
        nombre: '',
        ciudad: '',
        estado: '',
        telefono: '',
        capacidad_personas: '',
        domicilio: ''
    });

    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if(params.id){
            loadPlace(params.id);
        }
    }, [params.id]);

    const loadPlace = async (id) => {
        const res = await fetch('http://localhost:6969/places/' + id);
        const data = await res.json();
        setPlace({ coordenadas: data.coordenadas, nombre: data.nombre, ciudad: data.ciudad, estado: data.estado, telefono: data.telefono, capacidad_personas: data.capacidad_personas, domicilio: data.domicilio });
        setEditing(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            if(editing){
                await fetch('http://localhost:6969/places/' + params.id, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(place)
                });
            } else{
                await fetch('http://localhost:6969/places', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(place)
                });
            }

            setLoading(false);
            navigate('/places');
        } catch(error){
            console.log(error);
        }
    }

    const handleChange = e => {
        setPlace({
            ...place,
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
                        {editing ? 'Editar Lugar' : 'Crear Lugar'}
                    </Typography>
                    <CardContent>
                        <form onSubmit={ handleSubmit }>
                            <TextField
                                name='coordenadas'
                                onChange={ handleChange }
                                value={ place.coordenadas }
                                variant='filled'
                                label='Coordenadas (*)'
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
                                name='nombre'
                                onChange={ handleChange }
                                value={ place.nombre }
                                variant='filled'
                                label='Nombre del lugar (*)'
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
                                name='ciudad'
                                onChange={ handleChange }
                                value={ place.ciudad }
                                variant='filled'
                                label='Ciudad (*)'
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
                                name='estado'
                                onChange={ handleChange }
                                value={ place.estado }
                                variant='filled'
                                label='Estado (*)'
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
                                name='telefono'
                                onChange={ handleChange }
                                value={ place.telefono }
                                variant='filled'
                                label='Telefono del lugar'
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
                                name='capacidad_personas'
                                onChange={ handleChange }
                                value={ place.capacidad_personas }
                                variant='filled'
                                label='Capacidad personas (*)'
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
                                name='domicilio'
                                onChange={ handleChange }
                                value={ place.domicilio }
                                variant='filled'
                                label='Domicilio del lugar (*)'
                                multiline
                                rows={4}
                                sx={{display: 'block', margin: '.5rem'}}

                                inputProps={{
                                    style: {color: 'white'}
                                }}
                                InputLabelProps={{
                                    style: {color: 'red'}
                                }}
                            />

                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                disabled={!place.coordenadas || !place.nombre || !place.ciudad || !place.estado || !place.capacidad_personas || !place.domicilio}
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