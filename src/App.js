import {
  BrowserRouter as Router,
} from 'react-router-dom'

import Routes from './routes'
function App() {
  return (
    <div id="app">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App;
