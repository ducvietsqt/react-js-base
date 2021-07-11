import '../assets/App.css';
import {
  Route,
} from 'react-router-dom'
import Products from '../pages/products'

export default function App() {
  return (
    <div className="App">
      <Route path="/products">
        <Products/>
      </Route>
    </div>
  )
}


