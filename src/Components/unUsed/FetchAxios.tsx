import React, { Component } from "react";
import axios from "axios";
type Props = {};

type State = {};

class FetchAxios extends Component<Props, State> {
  state = {};

  getFetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => console.log("result", result))
      .catch((err) => console.log("err", err));
  }

  async componentDidMount() {
    this.getFetch();
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log("data", res))
      .catch((err) => console.log("err", err));
  }
  render() {
    return <div>FetchAxios</div>;
  }
}

export default FetchAxios;
