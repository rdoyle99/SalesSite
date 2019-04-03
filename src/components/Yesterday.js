import React from "react"

var phantom = {
  display: 'block',
  padding: '20px',
  height: '20px',
  width: '100%',
  margin: '20px'

}

var sizing = {
  fontsize: '15vw',
  textAlign: 'center',
  fontfamily: 'Open Sans',
  fontstyle: 'Sans Serif'
}

const Yesterday = () => (

  <div>
    <div style={phantom}> </div>
    <div class="container-fluid" style={sizing}>
      <h1> Yesterday </h1>
      <br></br>
    </div>
  </div>

)

export default Yesterday
