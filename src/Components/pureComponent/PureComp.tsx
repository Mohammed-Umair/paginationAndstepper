import React, { PureComponent } from 'react'

type Props = {
    name:any;
}

class PureComp extends PureComponent<Props> {
  render() {
    console.log("pure comp render");

    const {name}=this.props
    return (
      <div>PureComp{name}</div>
    )
  }
}

export default PureComp