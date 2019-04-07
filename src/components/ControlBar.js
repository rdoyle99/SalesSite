import React from "react"
import ListingsPage from "./ListingsPage"
import Roadmap from "./Roadmap"
import "./styles/ControlBar.css"

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      value: <ListingsPage/>
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({showComponent: true});
  }

  render() {
    return (<div>
      <button class="butty btn btn-outline-primary controller" onClick={this._onButtonClick}>Button</button>
      {
        this.state.showComponent
          ? <Roadmap/>
          : <ListingsPage/>
      }
    </div>);
  }
}

export default ControlBar
