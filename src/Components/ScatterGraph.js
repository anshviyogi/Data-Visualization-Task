import React,{useEffect,useState} from "react";
import {Data} from '../Data'
import EChartsReact from "echarts-for-react";

function ScatterGraph(){

    const[data,setData] = useState([])

    // Run only once
    useEffect(()=>{
        const fetchData = async()=>{
          setData(await Data)
        }
        fetchData()
      },[])

    //   ECharts Data stuff

      const option = {
    title:{
      text:"Scatter Plot"
    },
    toolTip:{},
    xAxis: {
      data:data.map(({ColorIntensity})=> ColorIntensity)
    },
    yAxis: {
      data:data.map(({Hue})=> Hue)
    },
    series: [
      {
        symbolSize: 20,
        data:[
          [3.4,5.6],
          [2.08,10.52]
          // And soo on . . .
        ],
        type: 'scatter'
      }
    ]
  };
  return(
    <EChartsReact option={option}/> 
  )
}
export default ScatterGraph