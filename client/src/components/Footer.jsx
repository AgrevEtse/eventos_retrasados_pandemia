import { Box, AppBar, Container, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Footer(){
    const navigate = useNavigate();

    return (
        <Box
            sx={{ flexGrow: 1 }}
        >
            <div
                style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Button
                    style={{ marginRight: '1rem' }}
                    variant='contained'
                    onClick={ () => navigate('/events') }
                >
                    Lista de Eventos
                </Button>

                <Button
                    style={{ marginRight: '1rem' }}
                    variant='contained'
                    onClick={ () => navigate('/places') }
                >
                    Lista de Lugares
                </Button>
            </div>

            <AppBar
                position='static'
                color='transparent'
                style={{ boxShadow: 'none' }}
            >
                <Container
                    style={{ marginTop: '2rem' }}
                >
                    <Toolbar>
                        <Typography
                            variant='h6'
                            sx={{ flexGrow: 1 }}
                            style={{ textAlign: 'center', backgroundColor: '#1e272e', color: '#fff', padding: '0.5rem' }}
                        >
                            Copyright © 2022 EventHub. Todos los derechos reservados.
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}