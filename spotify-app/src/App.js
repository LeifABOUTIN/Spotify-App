import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';

import { store } from './store';
import Spotify from './components';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Spotify}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
