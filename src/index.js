import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));


//Index.js is purely for rendering the App.js file, which holds all of my components. This file
//also holds css and I'll see if I can figure out if that does anything. 1.20.2019

//to add: a state counter that shows jobs applied to. use code similar to this:
//class App extends React.Component {
//import React from "react"
//
//class App extends React.Component {
//    constructor() {
//        super()
//        this.state = {
//            count: 0
//        }
//        this.handleClick = this.handleClick.bind(this)
//    }
//
//    handleClick() {
//        this.setState(prevState => {
//            return {
//                count: prevState.count + 1
//            }
//        })
//    }
//
//    render() {
//        return (
//            <div>
//                <h1>{this.state.count}</h1>
//                <button onClick={this.handleClick}>Change!</button>
//                ChildComponent count={this.state.count}/>
//            </div>
//        )
//    }
//}
//
//export default App
