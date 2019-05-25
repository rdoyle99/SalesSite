import React from "react"
import "./styles/Footer.css"



class FooterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { name: '', email: '' } };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    var updatedData = this.state.data;
    updatedData[event.target.name] = event.target.value
    this.setState({
      loading: false,
      data: updatedData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://sheetsu.com/apis/v1.0su/71dd9a045b9f", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(this.state.data)
     }).then( (response) => {
        return response.json()
      }).then( (json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <div class="row columns is-mobile d-inline-flex" >
        <form
            id="email-form"
            onSubmit={this.handleSubmit}
            class="d-inline-flex columns is-mobile">
          <p
              class="note column"> Get a Daily Email <br />of SaaS Sales Jobs </p>
          <input
            class="input column d-inline-flex is-mobile"
            type="text"
            placeholder="Name"
            name="form_name"
            onChange={this.handleInputChange}
            required
          />
          <input
            class="input d-inline-flex column is-mobile"
            type="email"
            placeholder="Email"
            name="form_email"
            onChange={this.handleInputChange}
            required
          />
          <button
            class="btnsizing button d-inline-flex column"
            type="submit"
            onClick={()=>{ alert('Thanks! Sending you great jobs :)');}}
            >💸 Subscribe 💸
          </button>
        </form>
      </div>
    );
  }
}





export default FooterForm

//https://script.google.com/macros/s/AKfycbwnkaNVb3IDHug7SIml_mn08pRp0oQO35nE5lF36r6OVX0DOTU/exec
