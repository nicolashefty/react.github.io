import React from 'react'

const Trucks = props => (
  <ul>
    {props.trucks.map(truck => (
      <li>{truck}</li>
    ))}
  </ul>
)

export default Trucks
