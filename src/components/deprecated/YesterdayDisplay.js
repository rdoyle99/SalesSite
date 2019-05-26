import React from "react"
import './styles/ListingDisplay.css'


//1.20.2019. this is a function that pulls in props of data to the App from jobsData
//it presents them in a table. I'd like to add a header for when dates change


class YesterdayDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: [],
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://sheetsu.com/apis/v1.0su/c3d38a3d5efd/sheets/yesterday")
      .then( (response) => {
        return response.json()
      }).then( (json) => {
        this.setState({
            loading: false,
            data: json,
          });
      });
  }


  renderData() {
    return (
        <ul>
          {
            this.state.data.map(function(row){
              return <div id="tablePreview" class="table table-hover">

                  <li key={row.id} class="row border-bottom d-inline-flex">

                  <div class="col d-inline-flex columns is-mobile">
                    <img class="logo" src= {row.logo}/>
                  </div>

                  <div class="col d-inline-flex columns d-inline-flex txtone">
                    <h2><strong>{row.company}</strong></h2>
                  </div>

                  <div class="col d-inline-flex columns is-mobile txttwo">
                    <h3>{row.title}</h3>
                  </div>

                  <div class="col d-inline-flex text-muted columns is-mobile txttwo">
                    <p>{row.location}</p>
                  </div>

                  <div class="col d-inline-flex columns is-mobile">
                    <a href={row.url} target="_blank"><button type="button" class="btn btn-success btn-small" >Apply</button></a>
                  </div>

                </li>
                </div>
            })
          }
        </ul>
    );
  }


  render() {
    const {data, loading} = this.state;

    return (
      <div class="container-fluid">
        {loading ? <LoadingSpinner /> : this.renderData()}
      </div>
    )
  }
}


export default YesterdayDisplay;
