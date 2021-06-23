import { BrowserRouter, Route } from 'react-router-dom'

import { NewRoom } from './pages/NewRoom'
import { Home } from './pages/Home'

function App() {

  return (
    <div>

      <BrowserRouter>
        <Route path='/' exact component={Home} />

        <Route path='/rooms/new' component={NewRoom} />


      </BrowserRouter>


    </div>
  );
}
export default App;
