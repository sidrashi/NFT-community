
import './App.css';
import { About, Brands, Characters, FAQ, Footer, Header, Hero, JC } from './containers';

function App() {
  return (
    <div className="App">
      
      <div className='gradient__bg'>
        <Header />
        <Hero />
      </div>
      <Brands />
      <About />
      <Characters />
      <div className='divider'>
      </div>
      <FAQ />
      <JC />
      <div className='divider'>
      </div>
      <Footer />
    </div>
  );
}

export default App;
