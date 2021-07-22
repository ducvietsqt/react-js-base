// export default function PageNotFound() {
//   return (
//     <div>Page Not Found</div>
//   )
// }
import React, {Component} from "react";
import Header from "../../components/Header";

class PageNotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <p>
          Page not found!
        </p>
      </div>
    )
  }
}

export default PageNotFound;