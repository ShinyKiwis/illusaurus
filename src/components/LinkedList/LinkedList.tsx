"use client"
import React, { useEffect, useRef } from 'react'
import * as d3 from "d3"

const LinkedListCanvas = ({data}: {data: number[]}) => {
  const listRef = useRef<SVGSVGElement | null>(null)

  useEffect(()=>{
    console.log(data)
    const svg = d3.select(listRef.current)
    const nodeRadius = 25
    svg.selectAll("circle")
      .data(data)
      .join(
        enter => enter
                  .append("circle")
                  .attr("r", nodeRadius)
                  .attr("cx",(_,i) => 200 + i * 80)
                  .attr("cy",_ => "50%")
                  .attr("stroke", "black")
                  .attr("stroke-width", "3")
                  .attr("fill", "none")
      )
    svg.selectAll("line")
      .data(data.slice(0, data.length - 1))
      .join(
        enter => enter
                  .append("line")
                  .attr("x1", (_,i) => 200 + i * 80 + nodeRadius)
                  .attr("y1", "50%")
                  .attr("x2", (_,i) => 200 + (i+1) * 80 - nodeRadius)
                  .attr("y2", "50%")
                  .attr("stroke-width", "3")
                  .style("stroke", "black")
      )
    
    svg.selectAll("text")
      .data(data)
      .join(
        enter => enter
                  .append("text")
                  .attr("x", (_,i) => 200 + i * 80)
                  .attr("y", (_,i) => "50%")
                  .attr("dy", "0.4em")
                  .attr("text-anchor", "middle")
                  .text(d => d)
      )
      
    console.log(svg)
  }, [data])

  return (
    <svg ref={listRef} width="100%" height="100%"></svg>
  )
}

export default LinkedListCanvas
