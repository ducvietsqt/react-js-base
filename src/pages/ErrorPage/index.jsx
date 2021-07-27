// export default function PageNotFound() {
//   return (
//     <div>Page Not Found</div>
//   )
// }
import React, {Component} from "react";

class PageNotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          Page not found!
        </p>
      </div>
    )
  }
}

export default PageNotFound;