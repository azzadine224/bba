import Header from './componenets/Header';
import CharacterGrid from './componenets/CharactersGrid';
import CharactersDetails from './componenets/CharactersDetails';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/Character.css'
import Search from './componenets/Search';
import { useState } from 'react';
import useFetchtwo from './useFetchtwo';
import Footer from './componenets/Footer'




function App() {

const {items} = useFetchtwo()

const [termsearch, settermsearch] = useState('')
  return (
    <Router>
    <Container > 
    <Header />
      <Routes>
      <Route exact path="/" element={<>
      <Search  settermsearch={settermsearch}/>
      <CharacterGrid  items={items} termsearch={termsearch}/>
      </>}/>
      <Route exact path="/items/:name" element={<CharactersDetails/>}/>
    </Routes>
    <Footer />
    </Container>
    </Router>
  );
}

export default App;
