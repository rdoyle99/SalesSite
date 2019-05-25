<<<<<<< HEAD
import React from 'react';
// import Today from "./listingElements/Today"
import TodayDisplay from './listingElements/TodayDisplay';
import Earlier from './listingElements/Earlier';
import EarlierDisplay from './listingElements/EarlierDisplay';

class ListingsPage extends React.Component {
  render() {
    return (
      <div>
        {/* <Today /> */}
=======
import React from 'react'
import Today from "./listingElements/Today"
import TodayDisplay from "./listingElements/TodayDisplay"
import Earlier from "./listingElements/Earlier"
import EarlierDisplay from "./listingElements/EarlierDisplay"

class ListingsPage extends React.Component {

  render() {
    return (
      <div >
        <Today />
>>>>>>> 6df2d6978e504d47e03d418ab7de63a2e695505f
        <TodayDisplay />
        <Earlier />
        <EarlierDisplay />
      </div>
    );
  }
}

export default ListingsPage;
