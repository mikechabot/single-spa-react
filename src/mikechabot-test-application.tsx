import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

lifecycles.bootstrap = (props) => {
  return Promise.resolve();
};

lifecycles.mount = (props) => {
  ReactDOM.render(<Root {...props} />, props.domElement);
  return Promise.resolve();
};

lifecycles.unmount = (props) => {
  ReactDOM.unmountComponentAtNode(props.domElement);
  return Promise.resolve();
};

export const { bootstrap, mount, unmount } = lifecycles;
