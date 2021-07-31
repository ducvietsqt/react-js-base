import React, {Component} from "react";
import {logIn} from "../../api/laravel_api";
import "./index.scss";
import InputField from "../../components/Input_Field";
import PasswordField from "../../components/Password_Field";
import SliderImage from "../../components/Slider_Image";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      remember: false,
      showPassword: false,
      passwordType: 'password',
      imageUrl: [
          "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
          "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg",
          "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg",
          "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
      ],
      // indexSet: [0, 1],
    };
    // this.textInput = React.createRef();
  }

  componentDidMount() {

  }

  async onLogin() {
    // const result = await logIn(this.state.username, this.state.password);
    // console.log(this.state.username);
  }

  onChangeRemember = (event) => {
    // console.log(event.target.value);
  }

  render() {
    const {onLogin} = this;
    return (
      <div className="login-page">
        <div className="iphone-background">
          <SliderImage imageUrl = {this.state.imageUrl}/>
        </div>
        <div>
          <div className='input-login'>
            <div className='web-name'>
              <h1>Web VIP Pro</h1>
            </div>
            <div id='login-element'>
              <InputField text="Nhập tên"/>
              <PasswordField text="Nhập password vào"/>
              <div>
                <button type="disabled" className="default-button button-login" onClick={onLogin}>Log in</button>
              </div>
              <div className="default-flex-center line-fix">
                <div className="line"/>
                <div className="line-text">
                  hoặc
                </div>
                <div className="line"/>
              </div>
              <div>
                <button className="default-button button-login-facebook" type="button">
                  {/* <img>
                  </img> */}
                  <span>Đăng nhập bằng phắc búc </span>
                </button>
              </div>
            </div>
          </div>
          <div className='sign-in-box'>
            <p>
              Bạn chưa có tài khoản ư?
              <a href='/signIn'>
              <span>
                Đăng ký
              </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;