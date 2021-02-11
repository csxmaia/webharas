import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home'
import Registrar from './pages/Registrar'
import Listar from './pages/Cavalos/Listar'
import Cadastrar from  './pages/Cavalos/Cadastrar'
import CadadastrarHaras from './pages/Haras/Cadastrar'
import ListarHaras from './pages/Haras/Listar'

function App() {
  return (
    <div style={{justifyContent: 'center'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', minWidth: '660px', alignItems: 'center', flexDirection: 'column', borderWidth: '1px', borderStyle: 'solid'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div>
              <h2>Webharas</h2>
            </div>
          </div>
          <div style={{borderWidth: '1px', borderStyle: 'solid', width: '100%'}}>
            <Router>
              <Switch>
                <Route path="/cavalos">
                  <Listar />
                </Route>
                <Route path="/cadastrar/cavalo">
                  <Cadastrar />
                </Route>
                <Route path="/registrar">
                  <Registrar />
                </Route>
                <Route path="/cadastrar/haras">
                  <CadadastrarHaras/>
                </Route>
                <Route path="/haras">
                  <ListarHaras/>
                </Route>
                <Route path="/login">
                  {/* <Login /> */}
                </Route>
                <Route path="/admin">
                  {/* <Login /> */}
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
