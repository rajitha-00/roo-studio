
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from './views/Home'
import Products from './views/Products'
import Gallery from './views/Gallery'
import AboutUs from './views/AboutUs'
import ContactUs from './views/ContactUs'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
        <Route path='/aboutus' element = {<AboutUs/>}/>
        <Route path='/contactus' element = {<ContactUs/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
