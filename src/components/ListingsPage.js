import React from 'react'
import TodayDisplay from "./listingElements/TodayDisplay"
import Earlier from "./listingElements/Earlier"
import EarlierDisplay from "./listingElements/EarlierDisplay"

class ListingsPage extends React.Component {

  render() {
    return (
      <div >
        <TodayDisplay />
        <Earlier />
        <EarlierDisplay />
      </div>
    );
  }
}

export default ListingsPage;
