import './App.css';
import { Route } from 'react-router';
import { PrincipalPage } from './Components/PrincipalPage/PrincipalPage';
import { Home } from './Components/Home/Home';
import { Details } from './Components/Videogamedetails/Details';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Route exact path='/' component={PrincipalPage} />
      <Route path='/Home' component={Home} />
      <Route path='/videogame/:id' component={Details} />
    </div>
  );
}

export default App;
 