import React, { Component } from 'react'

type Props = {
    name:any;
}

type State = {}

class RegComp extends Component<Props, State> {
  state = {}

  render() {
    console.log("regular comp render");

    const {name}=this.props
    return (
      <div>RegComp {name}</div>
    )
  }
}

export default RegComp