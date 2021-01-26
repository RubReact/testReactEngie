import React from 'react';



function Agency(props){


  return (
    <ul>
      <li>props.state.agence</li>
      <li>Name : {props.state.agence.name}</li>
      <li>Supervisor: {props.state.agence.Supervisor}</li>
      <li>Activity: {props.state.agence.Activity}</li>
    </ul>
  )
}
