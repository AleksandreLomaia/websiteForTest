import './App.css';
import Header from   '../src/components/Header'
import Hero from './section/Hero/Hero'
import PurpleBox from './section/purpleBox/PurpleBox';
import TracksBox from './section/TracksBox/TracksBox';
import Premium from './section/premium/Premium';
import MainBody from './section/mainBody/MainBody';
import Footer from './section/footer/Footer';



function App() {
  return (
    <div className='main-container'>
      <Header />
      <Hero />
      <PurpleBox />
      <TracksBox />
      <Premium />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
