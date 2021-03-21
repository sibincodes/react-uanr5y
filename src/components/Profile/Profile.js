import React from "react";
import { StoreContext } from "../Register/Register";
export default function Profile() {
  return (
    <StoreContext.Consumer>
      {value => <div> {console.log("value", value)}</div>}
    </StoreContext.Consumer>
  );
}
