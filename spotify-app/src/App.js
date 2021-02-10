import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { store } from './store';
import Spotify from './components';
import Dashboard from './components/dashboard';
import LastTracks from './components/lastTracks';
import NewReleases from  './components/newReleases';
import SavedTracks from './components/savedTracks';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Spotify}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/last-tracks" component={LastTracks}/>
            <Route path="/new-releases" component={NewReleases}/>
            <Route path="/saved-tracks" component={SavedTracks}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
