import React, { Component } from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import DeliveryAreaSearch from './containers/DeliveryAreaSearch'

class App extends Component {
  render() {
    return (
      <ScopedCssBaseline>
        <DeliveryAreaSearch />
      </ScopedCssBaseline>
    );
  }
}

export default App;
