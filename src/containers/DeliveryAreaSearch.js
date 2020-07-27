import React from "react";
import Result from "../components/Result";
import Input from "../components/Input";
import {
  isValidDeliveryArea,
  addressSelector,
  deliveryAreaSelector,
} from "../lib/selectors";

const initialState = {
  open: false,
  isMatch: false,
  address: null,
  deliveryArea: null,
};

export default class DeliveryAreaSearch extends React.Component {
  state = {
    ...initialState,
  };

  setClosed = () => this.setState({ open: false });

  setOpen = () => this.setState({ open: true });

  onSelect = (suggestion) => {
    if (suggestion && suggestion.label) {
      this.setState({
        isMatch: isValidDeliveryArea(suggestion),
        address: addressSelector(suggestion),
        deliveryArea: deliveryAreaSelector(suggestion),
      });
      this.setOpen();
    } else if (suggestion && !suggestion.label) {
      this.setState(initialState);
    }
  };

  render() {
    const { open, isMatch, address, deliveryArea } = this.state;

    const config = window.__config;

    let resultProps = {
      address,
      deliveryArea,
    };

    if (isMatch) {
      resultProps = {
        ...resultProps,
        title: config.success.title.replace("##address##", address),
        subTitle: config.success.sub_title.replace(
          "##address##",
          address
        ),
        url: config.success.url,
        actionText: config.success.button_text,
      };
    } else {
      resultProps = {
        ...resultProps,
        title: config.failure.title.replace("##address##", address),
        subTitle: config.failure.sub_title.replace(
          "##address##",
          address
        ),
        url: config.failure.url,
        actionText: config.failure.button_text,
      };
    }

    return (
      <div id="delivery-areas-search">
        <Input onSelect={this.onSelect} />
        {open && <Result {...resultProps} />}
      </div>
    );
  }
}
