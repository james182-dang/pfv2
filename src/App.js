import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'react-bootstrap';


const App = () => {

  const [currentDisplay, setCurrentDisplay] = useState('About');

  const showDisplay = () => {
    switch (currentDisplay) {
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
    <div className='App' style={{backgroundColor: '#E9CE7A'}}>
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
