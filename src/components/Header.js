import React from "react"
import "./styles/Header.css"

//this is simply a placeholder header. it should soon have an image and description. 1.20.2019

class Header extends React.Component {
  render() {
    return (<div class="holder">
      <h1 class="top">
        TECH SALES WORK
      </h1>
      <h2 class="bottom">
          The highest paying, highest rated, and most in-demand<br/>jobs in Software Sales, updated daily
      </h2>
    </div>);
  }
}

export default Header
