import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Registrar from './pages/Registrar'
import Listar from './pages/Cavalos/Listar'
import Cadastrar from  './pages/Cavalos/Cadastrar'
import CadadastrarHaras from './pages/Haras/Cadastrar'
import ListarHaras from './pages/Haras/Listar'

function App() {
  return (
/*     <div class='container'style={{justifyContent: 'center'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', minWidth: '660px', alignItems: 'center', flexDirection: 'column', borderWidth: '1px', borderStyle: 'solid'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> */
          <div class="container">
            <div class='row mx-lg-n1'>
              <div class="col py-3 px-lg-5 border bg-secondary">
                <h1 class="text-center text-monospace ">Webharas</h1></div>
            </div>
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
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>


  );
}

export default App;
