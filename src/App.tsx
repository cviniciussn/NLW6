import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NewRoom } from './pages/NewRoom'
import { Home } from './pages/Home'
import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room';

// ACIMA DAQUI APENAS IMPORTS


function App() {

  return (
    <div>

      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/rooms/new' component={NewRoom} />
            <Route path='/rooms/:id' component={Room} />
          </Switch>
        </AuthContextProvider>

      </BrowserRouter>
    </div>
  );
}
export default App;
