import React from "react";
import "./index.scss";
import PropTypes from 'prop-types';

class InputField extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onChangeHandler = (event) => {
    let parent = event.target.parentNode;
    let value = event.target.value;

    if (value) {
      parent.classList.add("onChange");
    } else {
      parent.classList.remove("onChange");
    }
  }

  render() {
    const {onChangeHandler} = this;
    return (
      <div className="input-element">
        <div className="input-text">
          <span className='input-label'>{this.props.text}</span>
          <input className='input-type' type={this.props.type ? this.props.type : "text"}
                 onChange={onChangeHandler}/>
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default InputField;

InputField.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}
