
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Articles from './components/Articles/Articles';
import CampInfrustructure from './components/CampInfrastructure/CampInfrustructure';
import TourPrograms from './components/TourPrograms/TourPrograms';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <TourPrograms></TourPrograms>
      <CampInfrustructure></CampInfrustructure>
      <Articles></Articles>
      <Footer></Footer>
    </div>
  );
}

export default App;
