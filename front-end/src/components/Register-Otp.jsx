import React, { Component } from "react";

class RegisterOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
    };
  }

  sendOtp = () => {
    const { mobileNumber } = this.state;
    if (mobileNumber.length < 10 || isNaN(Number(mobileNumber))) {
      // Put validation message
      return;
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { mobileNumber } = this.state;
    console.log(this.state);
    return (
      <div>
        RegisterOtp
        <input
          name="mobileNumber"
          value={mobileNumber}
          onChange={this.handleChange}
        />
        <button onClick={this.sendOtp}>Continue</button>
      </div>
    );
  }
}

export default RegisterOtp;
