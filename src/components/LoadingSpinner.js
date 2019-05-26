import React from 'react'
import './styles/Footer.css';


class LoadingSpinner extends React.Component {
  render() {
    return (

      <div>
        <progress class="progress is-primary" value="50">15%</progress>
      </div>

    );
  }
}

export default LoadingSpinner
