import React from "react"
import ScatterGraph from "./Components/ScatterGraph"
import BarGraph from "./Components/BarGraph"

function App(){

  return(
    <>
<h1 style={{textAlign:'center'}}>Scatter Plot between Color Intensity and Hue</h1>
  <ScatterGraph/>
  <hr/>
  <h1 style={{textAlign:'center'}}>Bar Chart of Alochol & Malic Acid</h1>
  <BarGraph/>

  </>
  )
}


export default App