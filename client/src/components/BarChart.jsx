import React from 'react';
import * as d3 from "d3";


class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }
    
  /* function to draw bar chart */
  drawChart() {
    //variable contaning artist counts
    const artistInfo = this.props.data;
    //variable containing x axis labels for artists
    const artistNames = this.props.artists;
    //variable that contains the chart to display
    const svg = d3.select("holder")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 1000)
    .style("margin-left", 600);
    const label = ['mitksi', 'i', 'j'];
                
    
    svg.selectAll("rect")
      .data(artistInfo)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 100 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "#007f4f")

      svg.selectAll("text")
      .data(artistInfo)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 100 - 10 * d)
      .text(function(d) {return d})

      // svg.append("text")
      // .attr("x", (d, i) => i * 70)
      // .attr("y", (d, i) => 100 - 10 * d)      
      // .attr("dy", "4em")
      // .text(function(d, i) { for(var i = 0; i < label.length; i++) return label[i]; });


   }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
    
export default BarChart;