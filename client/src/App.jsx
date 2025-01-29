import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Menu from './components/Navbar'
import Home from './components/Home'
import EventList from './components/EventList'
import EventForm from './components/EventForm'
import PlaceList from './components/PlaceList'
import PlaceForm from './components/PlaceForm'
import PlaceCard from './components/PlaceCard'
import Join from './components/Join'
import Footer from './components/Footer'

export default function App(){
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/new" element={<EventForm />} />
          <Route path='/events/:id/edit' element={<EventForm />} />
          <Route path="/places" element={<PlaceList />} />
          <Route path="/places/new" element={<PlaceForm />} />
          <Route path='/places/:id' element={<PlaceCard />} />
          <Route path='/places/:id/edit' element={<PlaceForm />} />
          <Route path='/join' element={<Join />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}