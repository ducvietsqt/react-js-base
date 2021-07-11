import {
  BrowserRouter as Router,
} from 'react-router-dom'

import Route from './routes'
import Header from './components/Header'
function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <Route />
      </Router>
    </div>
  )
}

export default App;
