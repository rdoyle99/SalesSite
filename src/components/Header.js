import React from "react"
import "./styles/Header.css"

//this is simply a placeholder header. it should soon have an image and description. 1.20.2019

class Header extends React.Component {
  render() {
    return (<div class="holder">
      <span class="top">
        TECH SALES WORK
      </span>
      <span class="bottom">
        <div >
          The highest paying, highest rated, and most in-demand
        </div>
        jobs in Software Sales, updated daily
      </span>
    </div>);
  }
}

export default Header
