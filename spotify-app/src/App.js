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
import PrivateRoute from './components/privateRoute';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Spotify}/>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/last-tracks">
              <LastTracks />
            </PrivateRoute>
            <PrivateRoute path="/new-releases">
              <NewReleases />
            </PrivateRoute>
            <PrivateRoute path="/saved-tracks">
             <SavedTracks />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
