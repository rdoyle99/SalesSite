import React from "react"
import FooterForm from "./FooterForm"
import './styles/Footer.css';

//1.20.2019 this is a simple placeholder footer. I'd like to scroll-lock it to the page
//and have it be an email capture form for an eventual mailing list



class Footer extends React.Component {
  render() {
    return (
      <div class="phantom">
        <div class="sticky-footer" >
          <FooterForm />
        </div>
      </div>
    );
  }
}

export default Footer
