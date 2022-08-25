import React,{useEffect,useState} from "react";
import {Data} from '../Data'
import EChartsReact from "echarts-for-react";

function BarGraph(){
console.log(Data)

const[data,setData] = useState([])

useEffect(()=>{
  const fetchData = async()=>{
    setData(await Data)
  }
  fetchData()
},[])


  const option = {
    title:{
      text: 'Bar Chart'
    },
    tooltip:{},
    legend:{
      data : ['data']
    },
    xAxis:{
      data:data.map(({Alcohol}) => Alcohol)
    },
    yAxis:{
        data:data.map(({MalicAcid}) => MalicAcid)
    },
    series:[
      {
        name:'data',
        type:'bar',
        data:[10,15,2,6,8,0.8,10.12]
        // And so on . . .
      }
    ]
  }
  return <EChartsReact option={option}/> 
}
export default BarGraph