import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function PlaceCard(){
    const [place, setPlace] = useState({
        coordenadas: '',
        nombre: '',
        ciudad: '',
        estado: '',
        telefono: '',
        capacidad_personas: '',
        domicilio: ''
    });

    const navigate = useNavigate();
    const params = useParams();

    const loadPlace = async (id) => {
        const res = await fetch('http://localhost:6969/places/' + id);

        const data = await res.json();
        setPlace(data);
    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:6969/places/${id}`, {
            method: 'DELETE'
        });

        navigate('/places');
    }

    useEffect(() => {
        if(params.id){
            loadPlace(params.id);
        }
    }, [params.id]);

    return (
        <Card style={{
            marginTop: '1.5rem',
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
                    style={{color: 'white'}}
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
    )
}