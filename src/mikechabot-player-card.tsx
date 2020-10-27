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

// import "./set-public-path";
//
// import singleSpa from "single-spa";
//
// import React from "react";
// import ReactDOM from "react-dom";
// import singleSpaReact from "single-spa-react";
// import RootComponent from "./root.component";
//
// let internalMountId;
// let unmountMe;
//
// export const bootstrap = (props) => {
//   console.log("bootstrap");
//
//   document.addEventListener("mount-component", (event: CustomEvent) => {
//     console.log("Programmatically mounting node", props);
//     console.log("mounting with customEvent", event);
//     console.log("mounting with props", props);
//
//     internalMountId = event.detail.mountId;
//
//     const domElement = document.getElementById(internalMountId);
//     const parcelProps = { domElement, customProp1: "foo" };
//
//     const MyParcel = singleSpaReact({
//       React,
//       ReactDOM,
//       rootComponent: () => (
//         <RootComponent name={props.name} {...props.customProps} />
//       ),
//       errorBoundary(err, info, props) {
//         return <div>This renders when a catastrophic error occurs</div>;
//       },
//       preserveGlobal: true,
//     });
//
//     const { unmount: unmountMe } = props.mountParcel(MyParcel, parcelProps);
//   });
//
//   document.addEventListener("unmount-component", () => {
//     console.log("Programmatically unmounting node", props);
//     ReactDOM.unmountComponentAtNode(document.getElementById(internalMountId));
//   });
//
//   return Promise.resolve();
// };
//
// export const mount = (props) => {
//   console.log("mounting");
//   return Promise.resolve();
// };
//
// export const unmount = (props) => {
//   console.log("Within the actual unmount");
//
//   document.addEventListener("unmount-component", () => {
//     ReactDOM.unmountComponentAtNode(
//       document.getElementById("dk-live-experience--player-card")
//     );
//   });
//
//   return Promise.resolve();
// };

// export const bootstrap = () => {
//   // one time initialization
//   // eslint-disable-next-line no-console
//   return Promise.resolve();
// };
//
// export const mount = (props) => {
//   ReactDOM.render(
//     <RootComponent {...props} />,
//     document.getElementById("dk-live-experience--player-card")
//   );
//   return Promise.resolve();
// };
//
// export const unmount = () => {
//   // use a framework to unmount dom nodes and perform other cleanup
//   return Promise.resolve();
// };

// How to mount the parcel
// const domElement = document.getElementById("dk-live-experience--player-card");
//
// const parcelProps = { domElement, name: "foo" };
// const parcel = singleSpa.mountRootParcel(MyParcel, parcelProps);
// // The parcel is being mounted. We can wait for it to finish with the mountPromise.
//
// parcel.mountPromise
//   .then(() => {
//     // eslint-disable-next-line no-console
//     console.log("finished mounting parcel!");
//     // If we want to re-render the parcel, we can call the update lifecycle method, which returns a promise
//     parcelProps.name = "jpe";
//     return;
//   })
//   .then(() => {
//     // Call the unmount lifecycle when we need the parcel to unmount. This function also returns a promise
//     // return parcel.unmount();
//   });

// export const { mount, unmount } = MyParcel;
