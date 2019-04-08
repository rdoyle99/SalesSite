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
               className='butty btn btn-outline-primary'
               onClick={() => this.handleClick(<ListingsPage />)}
           > Jobs 💼
           </button>
           <div class="divider"/>
            <button
                 className='butty btn btn-outline-primary'
                 onClick={() => this.handleClick(<Roadmap />)}
             > Roadmap 🗺
             </button>
             <div class="divider"/>
             <button
                  className='butty btn btn-outline-primary'
                  onClick={() => this.handleClick(<Heatlist />)}
              > Heatlist 🔥
              </button>
            </div>
            {this.state.buttonPressed}
            </div>
        )
    }
}



export default ControlBar
