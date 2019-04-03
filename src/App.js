import React from 'react'
import './App.css'
import Header from "./components/Header"
import Today from "./components/Today"
import TodayDisplay from "./components/TodayDisplay"
import Yesterday from "./components/Yesterday"
import YesterdayDisplay from "./components/YesterdayDisplay"
import Earlier from "./components/Earlier"
import EarlierDisplay from "./components/EarlierDisplay"
import Footer from "./components/Footer"
import StickyTweet from "./components/StickyTweet"
//import jobsData from "./components/jobsData"

//The above section imports the three components that comprise the site: The header, the listings,
//and the footer. 1.20.2019

//the below App creates a constructor that gives state to the jobsData pulled from jobsData.js

class App extends React.Component {

  render() {
    return (
      <div class="container-fluid mydiv">
        <StickyTweet />
        <Header />
        <Today />
        <TodayDisplay />
        <Earlier />
        <EarlierDisplay />
        <Footer />
      </div>
    );
  }
}

export default App;
