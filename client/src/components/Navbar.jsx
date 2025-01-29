import { Box, AppBar, Container, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
    const navigate = useNavigate();

    return (
        <Box
            sx={{ flexGrow: 1 }}
        >
            <AppBar
                position='static'
                color='transparent'
                style={{ boxShadow: 'none' }}
            >
                <Container>
                    <Toolbar
                        style={{ backgroundColor: '#1e272e' }}
                    >
                        <Typography
                            variant='h3'
                            sx={{ flexGrow: 1 }}
                        >
                            <Link
                                to='/'
                                style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}
                            >
                                EventHub
                            </Link>
                        </Typography>

                        <div>
                            <Button
                                style={{ marginRight: '1rem' }}
                                variant='contained'
                                onClick={ () => navigate('/events/new') }
                            >
                                Nuevo Evento
                            </Button>

                            <Button
                                style={{ marginRight: '1rem' }}
                                variant='contained'
                                onClick={ () => navigate('/places/new') }
                            >
                                Nuevo Lugar
                            </Button>

                            <Button
                                variant='contained'
                                onClick={ () => navigate('/join') }
                            >
                                Buscar Eventos por Lugar
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}