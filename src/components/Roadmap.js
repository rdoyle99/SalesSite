import React from "react"
import "./styles/Roadmap.css"

class Roadmap extends React.Component {
  render() {
    return (<div class="todos">
      <h3 class="toppings" id="top">
        This is the roadmap of features being built into the Tech Sales Work platform. If you have ideas or feedback, please DM me by heading to my Twitter on the top left!
      </h3>
      <ul class="listings">
        <li class="list-group-item">Add ability to post jobs</li>
        <li class="list-group-item">Add ability to sort by role and perform search</li>
        <li class="list-group-item">Augment postings with salary and satisfaction data</li>
        <li class="list-group-item">Create a "heatmap" of the best companies to work for at any given time</li>
        <li class="list-group-item">List # of applications for each job</li>
        <li class="list-group-item">Auto-tweet newly posted jobs</li>
        <li class="list-group-item">Automate daily emails of new jobs</li>
        <li class="list-group-item">Hit my quota at my day job</li>
      </ul>
    </div>)
  }
}

export default Roadmap;
