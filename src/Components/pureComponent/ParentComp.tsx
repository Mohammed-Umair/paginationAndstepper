import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

type Props = {};

type State = {
  name: any;
};

class ParentComp extends Component<Props, State> {
  state: State = {
    name: "Zaki",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Zaki" });
    }, 2000);
  }

  render() {
    console.log("================parent comp render==========");

    return (
      <div>
        parent Comp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
