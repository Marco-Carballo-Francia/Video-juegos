import './App.css';
import { Route } from 'react-router';
import { PrincipalPage } from './Components/PrincipalPage/PrincipalPage';
import { SearchBar } from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Route exact path='/' component={PrincipalPage} />
      <Route path='/Home' component={SearchBar} />
    </div>
  );
}

export default App;
 