import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

document.body.style = 'background: #252B42;';

function App() {
  return (

    <Router>

        <Container className='container'>

            <Navbar/>

            <Hero/>

            <Cards/>

        </Container>

        

    </Router>
    


  );
}

const Container = styled.div``

export default App;
