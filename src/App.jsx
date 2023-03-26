import Row from "./components/Row";
import './app.css'
import requests from './components/requests'
function App() {
  return (
    <div className="app">
     <Row fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
