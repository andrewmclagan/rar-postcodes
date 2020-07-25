import React from "react";
import Failure from "../components/Failure";
import Success from "../components/Success";
import Input from "../components/Input";
import Dialog from "@material-ui/core/Dialog";
import {
  isValidDeliveryArea,
  addressSelector,
  deliveryAreaSelector,
} from "../lib/selectors";

export default class DeliveryAreaSearch extends React.Component {
  state = {
    isDialogOpen: false,
    isMatch: false,
    address: null,
    deliveryArea: null,
  };

  closeDialog = () => this.setState({ isDialogOpen: false });

  openDialog = () => this.setState({ isDialogOpen: true });

  onSelect = (suggestion) => {
    this.setState({
      isMatch: isValidDeliveryArea(suggestion),
      address: addressSelector(suggestion),
      deliveryArea: deliveryAreaSelector(suggestion),
    });
    this.openDialog();
  };

  render() {
    const { isDialogOpen, isMatch, address, deliveryArea } = this.state;

    return (
      <div id="delivery-areas-search">
        <Input onSelect={this.onSelect} />
        <Dialog open={isDialogOpen} onClose={this.closeDialog}>
          {isMatch && <Success address={address} deliveryArea={deliveryArea} />}
          {isMatch === false && (
            <Failure address={address} deliveryArea={deliveryArea} />
          )}
        </Dialog>
      </div>
    );
  }
}
