import React from "react"
import './ListingDisplay.css'
import LoadingSpinner from './LoadingSpinner'

//1.20.2019. this is a function that pulls in props of data to the App from jobsData
//it presents them in a table. I'd like to add a header for when dates change



class EarlierDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: [],
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://sheetsu.com/apis/v1.0su/c3d38a3d5efd/sheets/earlier")
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
        <ul class="job-list">
          {
            this.state.data.map(function(row){
              return <div>

                <li
                  key={row.id}
                  class="item"
                  id="hov"
                  >
                    <a
                      href={row.url}
                      target="_blank"
                      title={row.title}
                      id="some-div"
                      >
                  <span
                    class="company-picture"
                    title={row.company}>
                      <img
                        data-src={row.logo}
                        alt="💰"
                        class="lazyloaded"
                        src={row.logo} />
                  </span>

                  <div class="org">

                    <span
                      class="company-n-title">
                        <span
                          class="companyName"> {row.company}
                        </span>
                        <span
                          class="jobTitle"> {row.title}
                        </span>
                    </span>

                    <span
                      class="jobLocation"> {row.location}
                    </span>

                </div>
                <div >
                <span id="some-element"> Click<br/>to<br/>Apply</span>
                </div>
                </a>


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


export default EarlierDisplay;
