import React from 'react';
import './styles/ListingDisplay.css';
import LoadingSpinner from './LoadingSpinner';

//1.20.2019. this is a function that pulls in props of posts to the App from jobsData
//it presents them in a table. I'd like to add a header for when dates change



class TodayDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      originalPosts: [],
      posts: [],
      filter: ''
    };
    this.baseState = this.state
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

      );
  }

  handleChange = e => {
    this.setState({
        filter: e.target.value,
        posts: this.state.originalPosts.filter(
          post => post.tag === e.target.value
        )},);};

        resetState = e => {
          this.setState=(this.baseState)
        }


  renderData() {
    console.log(this.state);
    return (
      <div>
        <div class="filters">
          <span class='header'>Refine</span>
          <select value={this.state.filter} onChange={this.handleChange}>
            <option value={this.resetState}>All</option>
            <option value='Sales Development'>SDR</option>
            <option value='Account Executive'>AE</option>
          </select>
          <br />
        </div>
        <ul class='job-list'>
          {this.state.posts.map(function(row) {
            return (
              <div>
                <li key={row.id}  class='item'>
                  <a
                    href={row.url}
                    target='_blank'
                    title={row.title}
                    id='some-div'
                  >
                    <div class='topper'>
                      <div class="image-container">
                        <img
                          posts-src={row.logo}
                          alt='💰'
                          class='lazyloaded company-picture'
                          src={row.logo}
                        />
                      </div>
                      <div class='company-n-title'>
                        <span class='companyName'>{row.company}</span>
                        <div class="inline">
                          <div>
                              <span class='jobTitle'>{row.title}&nbsp;&nbsp;•&nbsp;&nbsp;{row.location}</span>
                          </div>
                        </div>
                            <div class='contain'>
                              <span class='jobLocation'>{row.pay}&nbsp;&nbsp;•&nbsp;&nbsp;Posted {row.since} days ago</span>
                              <span class="tagger">{row.tag}</span>
                            </div>




                    </div>


                      </div>

                  </a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <div class='container-fluid'>
        {loading ? <LoadingSpinner /> : this.renderData()}
      </div>
    );
  }
}

export default TodayDisplay

//<div>
//    <button id='apply-appear'>
//       Click to Apply
//    </button>
//</div>
