import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'react-bootstrap';


const App = () => {

  const [currentDisplay, setCurrentDisplay] = useState('Home');

  const showDisplay = () => {
    switch (currentDisplay) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
    }
  };

  return (
    <div className='App' style={{backgroundColor: '#f9f9f9'}}>
      <Navbar
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
      <main>
        {showDisplay(currentDisplay)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
