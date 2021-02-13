import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home'
import Registrar from './pages/Registrar'
import Listar from './pages/Cavalos/Listar'
import Cadastrar from  './pages/Cavalos/Cadastrar'

function App() {


  return (
    <div style={{justifyContent: 'center'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', minWidth: '660px', flexDirection: 'column', borderWidth: '1px', borderStyle: 'solid'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div>
              <h2>Webharas</h2>
            </div>
          </div>
          <div style={{borderLeftWidth: '0px', borderRightWidth: '0px', borderTopWidth: '1px', borderBottomWidth: '1px', borderStyle: 'solid', width: '100%'}}>
            <div style={{padding: '6px'}}>
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
          <div style={{padding: '12px', width: '100%', flex: '1'}}>
            <button onClick={() => window.history.back()} style={{padding: '6px'}}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
