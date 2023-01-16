import './App.scss';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Services from './components/Services/Services';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Reviews from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Services />
      <About />
      <Clients />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
