
import './App.css';
import {originals,actions,comedy,horror} from './urls'
import Banner from './components/Banner/Banner';
import CardRow from './components/CardRow/CardRow';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <CardRow url={originals} title='Netflix Originals'/>
      <CardRow  url={actions} title='Actions Movies' isSmall/>
      <CardRow  url={comedy} title='Comedy Movies' isSmall/>
      <CardRow  url={horror} title='Horror Movies' isSmall/>
    </div>
  );
}

export default App;
