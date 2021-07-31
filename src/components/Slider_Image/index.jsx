import React, {Component} from "react";
import "./index.scss"

class SliderImage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      indexSet: [0, 1],
    };
  }

  componentDidMount() {
    let imageLength = this.props.imageUrl.length;
    setInterval(this.myTimer, 2000, imageLength);
  }

  myTimer = (length) => {
    let currIndex = this.state.indexSet;
    currIndex[0] = (currIndex[0] + 1) % length;
    currIndex[1] = (currIndex[1] + 1) % length;
    this.setState({indexSet: currIndex})
  }

  render() {
    return (
      <div className="slider-image">
        {
          this.props.imageUrl.map((value, index) =>
            <img className={"image-carousel " + (index === this.state.indexSet[0] ? "index-image-fade" : "")
            + (index === this.state.indexSet[1] ? "index-image" : "")}
                 src={value} alt=""/>
          )
        }
      </div>
    )
  }
}

export default SliderImage;