import { Typography } from '@mui/material';
import imgURL from '../assets/pandemia.jpeg';


export default function Home(){
    return (
        <>
            <Typography
                variant='h4'
                style={{ marginTop: '1rem', color: '#1976d2', fontWeight: 'bold'}}
            >
                    EventHub
            </Typography>

            <Typography
                variant='h5'
            >
                    Eventos Retrasados por Pandemia
            </Typography>

            <Typography
                style={{ marginTop: '2rem', fontSize: '1.3rem'}}
            >
                    A causa de la pandemia, muchos eventos han sido pospuestos o cancelados, poco a poco se ha ido recuperando el ritmo y los principales medios para comunicar los datos del evento ha sido principalmente por redes sociales, el problema es que si no sigues la página puede que no te enteres del evento o si llega a haber un cambio de fecha o lugar. Y en caso de que no uses redes sociales puede ser muy complicado llevar un seguimiento en los cambios o si se llega a repetir el evento.
            </Typography>

            <img src={ imgURL } width='1100px' style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} alt='Bacterias y dos mujeres con cubrebocas' />

            <Typography
                variant='h4'
                style={{ marginTop: '4rem' }}
            >
                    ¿Qué te permite hacer?
            </Typography>

            <Typography
                style={{ marginTop: '1rem', fontSize: '1.3rem'}}
            >
                    EventHub te permite crear eventos y llevar un seguimiento de los mismos, así como también puedes crear lugares para que los usuarios puedan asistir a los eventos.
            </Typography>

            <Typography
                variant='h4'
                style={{ marginTop: '3rem' }}
            >
                    Objetivo
            </Typography>

            <Typography
                style={{ marginTop: '1rem', fontSize: '1.3rem'}}
            >
                Buscamos centralizar la información en un mismo lugar, para que los usuarios puedan dar seguimiento a los eventos que fueron retrasados por la pandemia.
            </Typography>
        </>
    )
}