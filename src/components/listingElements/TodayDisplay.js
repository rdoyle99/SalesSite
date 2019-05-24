import React from 'react';
import '../styles/ListingDisplay.css';
import LoadingSpinner from './LoadingSpinner';

//1.20.2019. this is a function that pulls in props of data to the App from jobsData
//it presents them in a table. I'd like to add a header for when dates change

class TodayDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      originalPosts: [],
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://sheetsu.com/apis/v1.0su/c3d38a3d5efd')
      .then(response => {
        return response.json();
      })
      .then(
        json => {
          this.setState({ loading: false, originalPosts: json, posts: json });
        },
        () => console.log(this.state)
      );
  }

  renderData() {
    return (
      <ul class='job-list'>
        {this.state.data.map(function(row) {
          return (
            <div>
              <li key={row.id} id='hov' class='item'>
                <a
                  href={row.url}
                  target='_blank'
                  title={row.title}
                  id='some-div'
                >
                  <div class='topper'>
                    <div>
                      <img
                        data-src={row.logo}
                        alt='💰'
                        class='lazyloaded company-picture'
                        src={row.logo}
                      />
                    </div>

                    <div class='company-n-title'>
                      <span class='companyName'>{row.company}</span>
                      <span class='jobTitle'>{row.title}</span>
                    </div>
                    <div>
                      <span class='time'>{row.since}d</span>
                    </div>

                    <span id='apply-appear'>
                      Click
                      <br />
                      to
                      <br />
                      Apply
                    </span>
                  </div>
                  <div class='contain'>
                    <span class='tagger'>{row.tag}</span>
                    <span class='jobLocation'>{row.location}</span>
                  </div>
                  <div />
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div class='container-fluid'>
        {loading ? <LoadingSpinner /> : this.renderData()}
      </div>
    );
  }
}

export default TodayDisplay;
