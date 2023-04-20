/*
DATE: 04/12/2023
LAST MODIFIED BY: @@Kishore
*/

//Buttons for creating and verifying
import React from 'react'

export default function Button(props) {
  return (
    <div className="btn-inner">
      <button >{props.value}</button>
    </div>
  )
}
