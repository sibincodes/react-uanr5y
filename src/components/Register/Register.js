import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      state: "kerala",
      country: "india",
      address: "",
      selectedFile: "http://placehold.it/180",
      companyAddressFlag: true,
      homeAddressFlag: true,
      homeAddress: "",
      companyAddress: "",
      interest: "",
      interestBox: []
    };
  }

  handlefirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handlelastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleemailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handletelephoneChange = event => {
    this.setState({
      telephone: event.target.value
    });
  };

  handleStateChange = event => {
    this.setState({
      state: event.target.value
    });
  };
  handleCountryChange = event => {
    this.setState({
      country: event.target.value
    });
  };
  handleAddressChange = event => {
    this.setState({
      address: event.target.value
    });

    if (event.target.value == "home") {
      this.setState({
        homeAddressFlag: false,
        companyAddressFlag: true
      });
    } else if (event.target.value == "company") {
      this.setState({
        companyAddressFlag: false,
        homeAddressFlag: true
      });
    }
  };

  handleCompanyAddressChange = event => {
    this.setState({
      companyAddress: event.target.value
    });
  };

  handleHomeAddressChange = event => {
    this.setState({
      homeAddress: event.target.value
    });
  };

  handleInterest = event => {
    console.log("interest", event.target.value);

    this.setState({
      interest: event.target.value
    });
    var str = [];
    str = event.target.value;
    var res = str.split(",");

    console.log("bo res", res);
    this.setState({
      interestBox: res
    });
  };

  handleSubmit = event => {
    alert(
      `${this.state.firstName} ${this.state.telephone} ${this.state.topic}`
    );
    event.preventDefault();
  };

  onFileChange = event => {
    if (event.target.files && event.target.files[0]) {
      console.log("URL", event.target.files[0]);
      this.setState({ selectedFile: event.target.files[0].name });

      // var reader = new FileReader();

      // reader.onload = function(e) {
      //   $("#blah").attr("src", e.target.result);
      // };

      // reader.readAsDataURL(input.files[0]);
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      telephone,
      state,
      country,
      address,
      selectedFile,
      homeAddressFlag,
      companyAddressFlag,
      homeAddress,
      companyAddress,
      interest,
      interestBox
    } = this.state;
    return (
      <div className="row">
        <div className="column">
          <img id="blah" src={selectedFile} alt="your image" />
          <div>
            <input type="file" onChange={this.onFileChange} />
          </div>
        </div>
        <div className="column">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name </label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={this.handlefirstNameChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={this.handlelastNameChange}
              />
            </div>
            <div>
              <label>Age </label>
              <input
                type="range"
                id="vol"
                name="vol"
                step="100"
                min="0"
                max="500"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={this.handleemailChange}
              />
            </div>
            <div>
              <label>Tel</label>
              <input
                type="text"
                placeholder="Telephone"
                value={telephone}
                onChange={this.handletelephoneChange}
              />
            </div>
            <div>
              <label>State</label>
              <select value={state} onChange={this.handleStateChange}>
                <option value="kerala"> Kerala </option>
                <option value="tamilnadu">Tamilnadu</option>
                <option value="bihar">Bihar</option>
              </select>
            </div>
            <div>
              <label>Country</label>
              <select value={country} onChange={this.handleCountryChange}>
                <option value="india">INDIA</option>
                <option value="uae">UAE</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div>
              <label>Address</label>
              <select value={address} onChange={this.handleAddressChange}>
                <option value="" disabled selected>
                  Please Select..
                </option>
                <option value="home">Home</option>
                <option value="company">Company</option>
              </select>
              <select
                value={homeAddress}
                onChange={this.handleHomeAddressChange}
                hidden={homeAddressFlag}
              >
                <option value="homeaddress1">Home Address 1</option>
                <option value="homeaddress2">Home Address 2</option>
              </select>

              <select
                value={companyAddress}
                onChange={this.handleCompanyAddressChange}
                hidden={companyAddressFlag}
              >
                <option value="companyaddress1">Company Address 1</option>
                <option value="companyaddress2">Company Address 2</option>
              </select>
            </div>

            <div>
              <label>Interest </label>
              <input
                type="text"
                placeholder="Interest"
                value={interest}
                onChange={this.handleInterest}
              />
              <div>
                {interestBox.map(name => (
                  <button className="keywords">{name}</button>
                ))}{" "}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
