import React from 'react'
import './App.css'
import Header from "./components/Header"
import TodayDisplay from "./components/TodayDisplay"
import Footer from "./components/Footer"
import StickyTweet from "./components/StickyTweet"

class App extends React.Component {

  render() {
    return (
      <div class="all" >
        <StickyTweet />
        <Header />
        <TodayDisplay />
        <Footer />
      </div>
    );
  }
}

export default App;
