import React from "react"

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://sheetsu.com/apis/v1.0su/c3d38a3d5efd")
      .then( (response) => {
        return response.json()
      }).then( (json) => {
        this.setState({data: json});
      });
  }
}


export default Data
