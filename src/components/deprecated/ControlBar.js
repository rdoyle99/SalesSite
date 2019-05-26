import React from "react"
import ListingsPage from "./ListingsPage"
import Roadmap from "./Roadmap"
import Heatlist from "./Heatlist"
import "./styles/ControlBar.css"

class ControlBar extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonPressed: <ListingsPage />

        }
    }

    handleClick = (button) => {
        this.setState({ buttonPressed: button })
    }

    render() {
        return(
          <div>
          <div class="controller">
          <button
               id="but"
               className='butty btn'
               onClick={() => this.handleClick(<ListingsPage />)}
           > Jobs 💼
           </button>
           <div class="divider"/>
            <button
                 id="but"
                 className='butty btn'
                 onClick={() => this.handleClick(<Roadmap />)}
             > Roadmap 🗺
             </button>
             <div class="divider"/>

            </div>
            {this.state.buttonPressed}
            </div>
        )
    }
}



export default ControlBar
