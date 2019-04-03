import React from "react"
import FooterForm from "./FooterForm"

//1.20.2019 this is a simple placeholder footer. I'd like to scroll-lock it to the page
//and have it be an email capture form for an eventual mailing list

var style = {
    backgroundColor: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

class Footer extends React.Component {
  render() {
    return (
      <div class="container-fluid" style={phantom} >
        <div class="container-fluid" style={style}>
          <FooterForm />
        </div>
      </div>
    );
  }
}

export default Footer
