import React, { Component } from 'react'
import UpdateForm from './UpdateForm'


export class FirstName extends Component {
  render() {
    const {name, changeHandler, value} = this.props
    return (
      <div>
        <p>FirstName </p>
        <input name={name} onChange={changeHandler} value={value} />
      </div>
    )
  }
}

export default UpdateForm(FirstName)