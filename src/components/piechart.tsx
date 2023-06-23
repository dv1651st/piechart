'use client'

import * as d3 from "d3";
import React, { useEffect } from 'react';

export default function PieChart(data: { [s: string]: number; }) {

  useEffect(() => {
    const width = 450,
      height = 450,
      margin = 40;
    
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", `translate(${width/2}, ${height/2})`);
    
    const color = d3.scaleOrdinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
    
    const pie = d3.pie<any>()
      .value(function(d) {return d[1]})
    //.attr('fill', function (d: PieArcDatum<[string, number]>): string {
  //return color(d.data[1].toString()) as string;
    const data_ready = pie(Object.entries(data))
    svg
      .selectAll('whatever')
      .data(data_ready)
      .join('path')
      .attr('d', d3.arc<d3.PieArcDatum<number>>()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', function (d: d3.PieArcDatum<[string, number]>): string {
        return color(d.data[1].toString()) as string;
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
  }, []);

  return (
    <div id="my_dataviz"></div>
  );
}



