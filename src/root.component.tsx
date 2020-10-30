import React from "react";

export default class Root extends React.Component<any, any> {
  componentDidCatch(error) {
    console.error("Caught", error);
  }
  render() {
    return (
      <section>
        {this.props.moduleName} is mounted!
        <br />
        <br />
        <div
          style={{
            width: 500,
            height: 250,
            border: "1px solid black",
            display: "flex",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "flex-start", padding: 5 }}
          >
            <img src="https://placekitten.com/100/100" alt="kitten" />
          </div>
          <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <h3>Kitten Card</h3>
            <span>
              <strong>Player:</strong> Smitten Kitten
            </span>
            <span>
              <strong>Weight:</strong> 12 lbs
            </span>
            <span>
              <strong>Age:</strong> 3yo
            </span>
          </div>
        </div>
      </section>
    );
  }
}
