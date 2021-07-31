import React from "react";
import InputField from "../Input_Field";
import "./index.scss"

class PasswordField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      type: "password",
    }
  }

  onShowPassword = (event) => {
    this.setState(
      {
        showPassword: !this.state.showPassword,
        type: this.state.type === "password" ? "text" : "password",
      }
    );
  }

  render() {
    const {onShowPassword} = this;
    return (
      <div className="label-login-input">
        <InputField text={this.props.text} type={this.state.type}>
          <div className="password-flex--r">
            <button type="button" className="default-button showPassword-button"
                    onClick={onShowPassword}>
              {this.state.showPassword ? "Ẩn" : "Hiển thị"}
            </button>
          </div>
        </InputField>
      </div>
    )
  }
}

export default PasswordField;