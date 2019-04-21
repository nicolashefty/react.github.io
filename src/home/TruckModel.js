import React from 'react'

const Trucks = props => (
  <ul className="HomeList">
    {props.trucks.map(truck => (
      <li>{truck}</li>
    ))}
  </ul>
)

export default Trucks
