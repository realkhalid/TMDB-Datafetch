import Row from "./components/Row";
import './app.css'
import requests from './components/requests'
function App() {
  return (
    <div className="app">
      <h2 color="white">Trending</h2>
     <Row fetchUrl={requests.fetchTrending}/>
     <h2 color="white">Top Rated</h2>
     <Row fetchUrl={requests.fetchTopRated}/>
     <h2 color="white">Action Movies</h2>
     <Row fetchUrl={requests.fetchActionMovies}/>
     <h2 color="white">Comedy Movies</h2>
     <Row fetchUrl={requests.fetchComedyMovies}/>
     <h2 color="white">Horror Movies</h2>
     <Row fetchUrl={requests.fetchHorrorMovies}/>
     <h2 color="white">Romance Movies</h2>
     <Row fetchUrl={requests.fetchRomanceMovies}/>
     <h2 color="white">Documentaries</h2>
     <Row fetchUrl={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;
