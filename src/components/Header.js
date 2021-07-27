import {Link} from 'react-router-dom'
import './header.scss'

export default function Header() {
  return (
    <div className="header-app">
      <div className="container">
        <div className="flex">
          <Link className="text-link" to="/">Home</Link>
          <div className="text-link fl">/</div>
          <Link className="text-link" to="/products">Products</Link>
          <div className="text-link fl">/</div>
          <Link className="text-link" to="/testPage">test page</Link>
          <div className="text-link fl">/</div>
          <Link className="text-link" to="/signIn">sign in</Link>
        </div>
      </div>
    </div>
  )
}
