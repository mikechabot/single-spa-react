import React from "react";

export default class Root extends React.Component<any, any> {
  componentDidCatch(error) {
    console.error("Caught", error);
  }
  render() {
    return <section>{this.props.moduleName} is mounted!</section>;
  }
}
