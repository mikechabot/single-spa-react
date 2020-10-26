import React from "react";

export default class Root extends React.Component<any, any> {
  componentDidMount() {
    console.log("Mounted within Root component");
  }

  componentWillUnmount() {
    console.log("Unmounted within Root component");
  }

  componentDidCatch(error) {
    console.error("Caught", error);
  }
  render() {
    return <section>{this.props.name} is mounted!</section>;
  }
}
