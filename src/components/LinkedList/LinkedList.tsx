"use client"
import React, { useEffect, useRef } from 'react'
import * as d3 from "d3"

type Node = {
  value: number
}

const linkedListData: Node[] = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
  { value: 40 },
]

const LinkedList = () => {
  const listRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const svg = d3.select(listRef.current)
    svg.selectAll("circle")
    .data(linkedListData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => i * 80 + 40)
    .attr("cy", 200)
    .attr("r", 20)
    .attr("fill", "white")
    .attr("stroke", "black")

    svg.selectAll("line")
    .data(linkedListData.slice(0, linkedListData.length - 1))
    .enter()
    .append("line")
    .attr("x1", (d, i) => i * 80 + 60)
    .attr("y1", 200)
    .attr("x2", (d, i) => (i + 1) * 80 + 20)
    .attr("y2", 200)
    .attr("stroke", "black")

    svg.selectAll("text")
    .data(linkedListData)
    .enter()
    .append("text")
    .text(d => d.value)
    .attr("x", (d, i) => i * 80 + 40)
    .attr("y", 200)
    .attr("dy", 5)
    .attr("text-anchor", "middle");

  }, [])

  return (
    <svg ref={listRef} width="800" height="800"></svg>
  )
}

export default LinkedList
